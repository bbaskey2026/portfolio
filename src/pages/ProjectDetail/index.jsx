// src/pages/ProjectDetail/index.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Button,
  Grid,
  Skeleton,
  Alert,
  Divider,
  Paper,
  IconButton,
  Tooltip,
  Breadcrumbs,
  Link,
  CircularProgress,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BugReportIcon from '@mui/icons-material/BugReport';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import UpdateIcon from '@mui/icons-material/Update';
import CodeIcon from '@mui/icons-material/Code';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const GITHUB_USERNAME = 'bbaskey2026';

// ─── Language map for syntax highlighting ────────────────────────────────────
const EXTENSION_TO_LANGUAGE = {
  js: 'javascript', jsx: 'jsx', ts: 'typescript', tsx: 'tsx',
  py: 'python', rb: 'ruby', java: 'java', cpp: 'cpp', c: 'c',
  cs: 'csharp', go: 'go', rs: 'rust', php: 'php', swift: 'swift',
  kt: 'kotlin', html: 'html', css: 'css', scss: 'scss', sass: 'sass',
  json: 'json', yaml: 'yaml', yml: 'yaml', xml: 'xml', md: 'markdown',
  sh: 'bash', bash: 'bash', sql: 'sql', graphql: 'graphql',
  dockerfile: 'docker', toml: 'toml', ini: 'ini', env: 'bash',
};

const getLanguageFromFileName = (filename) => {
  const ext = filename.split('.').pop()?.toLowerCase();
  return EXTENSION_TO_LANGUAGE[ext] || 'text';
};

const getFileIcon = (filename, type) => {
  if (type === 'dir') return <FolderIcon sx={{ fontSize: 18, color: '#000000' }} />;
  return <InsertDriveFileIcon sx={{ fontSize: 18, color: '#555555' }} />;
};

// ─── Sub-components ──────────────────────────────────────────────────────────
const StatCard = ({ icon, label, value }) => (
  <Paper
    elevation={0}
    sx={{
      border: '1px solid #e5e5e5',
      borderRadius: 2,
      p: 2.5,
      textAlign: 'center',
      height: '100%',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 0.8,
      transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        borderColor: '#000000',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
      },
    }}
  >
    <Box sx={{ color: '#000000', display: 'flex', justifyContent: 'center' }}>{icon}</Box>
    <Typography variant="h5" sx={{ fontWeight: 800, color: '#000000', lineHeight: 1.2 }}>
      {value ?? '—'}
    </Typography>
    <Typography variant="caption" sx={{ color: '#666666', fontSize: '0.8rem', fontWeight: 600 }}>
      {label}
    </Typography>
  </Paper>
);

const InfoRow = ({ icon, label, value }) => (
  <Stack direction="row" alignItems="center" gap={1.5} sx={{ py: 1.5 }}>
    <Box sx={{ color: '#666666', display: 'flex' }}>{icon}</Box>
    <Typography variant="body2" sx={{ color: '#666666', minWidth: 120, fontSize: '0.85rem' }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ color: '#000000', fontWeight: 600, fontSize: '0.85rem' }}>
      {value || '—'}
    </Typography>
  </Stack>
);

// ─── File Tree Item ───────────────────────────────────────────────────────────
const FileTreeItem = ({ item, depth = 0, onFileClick, selectedFile }) => {
  const isSelected = selectedFile?.path === item.path;

  return (
    <Box
      onClick={() => onFileClick(item)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.2,
        px: 1.5,
        py: 1,
        pl: `${(depth * 16) + 12}px`,
        cursor: 'pointer',
        borderRadius: 1,
        mx: 0.5,
        backgroundColor: isSelected ? '#f5f5f5' : 'transparent',
        border: isSelected ? '1px solid #cccccc' : '1px solid transparent',
        transition: 'all 0.15s ease',
        '&:hover': {
          backgroundColor: isSelected ? '#f5f5f5' : '#fafafa',
        },
      }}
    >
      {item.type === 'dir' && (
        <ChevronRightIcon sx={{ fontSize: 16, color: '#666666', flexShrink: 0 }} />
      )}
      {getFileIcon(item.name, item.type)}
      <Typography
        variant="body2"
        sx={{
          color: isSelected ? '#000000' : '#444444',
          fontWeight: isSelected ? 700 : 500,
          fontSize: '0.85rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {item.name}
      </Typography>
      {item.type === 'file' && (
        <Typography
          variant="caption"
          sx={{ color: '#888888', fontSize: '0.75rem', ml: 'auto', flexShrink: 0 }}
        >
          {item.size > 1024
            ? `${(item.size / 1024).toFixed(1)}kb`
            : `${item.size}b`}
        </Typography>
      )}
    </Box>
  );
};

// ─── Code Viewer ─────────────────────────────────────────────────────────────
const CodeViewer = ({ file, repoName, branch, onClose, isMaximized, onToggleMaximize }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        setLoading(true);
        setError(null);

        const rawUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/${branch}/${file.path}`;
        const res = await fetch(rawUrl);

        if (!res.ok) throw new Error('Failed to load file content.');

        const text = await res.text();

        if (text.length > 300000) {
          setCode('// File is too large to display inline.');
        } else {
          setCode(text);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (file) fetchCode();
  }, [file, repoName, branch]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const language = getLanguageFromFileName(file.name);
  const lineCount = code.split('\n').length;
  const editorHeight = isMaximized ? 'calc(100vh - 120px)' : 680;

  return (
    <Paper
      elevation={0}
      sx={{
        borderLeft: '1px solid #e5e5e5',
        borderRadius: 0,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Code Viewer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2.5,
          py: 1.5,
          backgroundColor: '#fafafa',
          borderBottom: '1px solid #e5e5e5',
        }}
      >
        <Stack direction="row" alignItems="center" gap={1.2}>
          <InsertDriveFileIcon sx={{ fontSize: 18, color: '#000000' }} />
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#000000', fontSize: '0.85rem' }}>
            {file.name}
          </Typography>
          <Chip
            label={language}
            size="small"
            sx={{
              fontSize: '0.7rem',
              fontWeight: 600,
              height: 20,
              backgroundColor: '#e5e5e5',
              color: '#000000',
              borderRadius: 1,
            }}
          />
          <Typography variant="caption" sx={{ color: '#666666' }}>
            {lineCount} lines
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={0.8}>
          <Tooltip title={copied ? 'Copied!' : 'Copy Code'}>
            <IconButton
              size="small"
              onClick={handleCopy}
              sx={{ color: '#000000', border: '1px solid #e5e5e5', borderRadius: 1 }}
            >
              {copied ? <CheckIcon fontSize="small" sx={{ color: '#16a34a' }} /> : <ContentCopyIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
          <Tooltip title={isMaximized ? 'Restore View' : 'Maximize'}>
            <IconButton
              size="small"
              onClick={onToggleMaximize}
              sx={{ color: '#000000', border: '1px solid #e5e5e5', borderRadius: 1 }}
            >
              {isMaximized ? <CloseFullscreenIcon fontSize="small" /> : <OpenInFullIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Close File">
            <IconButton
              size="small"
              onClick={onClose}
              sx={{ color: '#000000', border: '1px solid #e5e5e5', borderRadius: 1 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      {/* Code Area */}
      <Box sx={{ flex: 1, overflow: 'auto', backgroundColor: '#1e1e1e' }}>
        {loading && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 300 }}>
            <CircularProgress size={32} sx={{ color: '#ffffff' }} />
          </Box>
        )}
        {error && (
          <Box sx={{ p: 3 }}>
            <Alert severity="error" sx={{ borderRadius: 1 }}>{error}</Alert>
          </Box>
        )}
        {!loading && !error && (
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            showLineNumbers
            customStyle={{
              margin: 0,
              padding: '16px',
              fontSize: '0.82rem',
              lineHeight: 1.6,
              background: '#1e1e1e',
              fontFamily: '"JetBrains Mono", monospace',
              minHeight: editorHeight,
            }}
            lineNumberStyle={{
              color: '#555555',
              paddingRight: '16px',
              userSelect: 'none',
            }}
          >
            {code}
          </SyntaxHighlighter>
        )}
      </Box>
    </Paper>
  );
};

// ─── Repository File Browser Tree ───────────────────────────────────────────
const RepoBrowser = ({ repoName, branch = 'main' }) => {
  const [currentPath, setCurrentPath] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const fetchContents = useCallback(
    async (path = '') => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/${path}?ref=${branch}`;
        const res = await fetch(url);

        if (!res.ok) throw new Error(`Could not fetch contents (${res.status})`);

        const data = await res.json();

        if (Array.isArray(data)) {
          const sorted = data.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === 'dir' ? -1 : 1;
          });
          setItems(sorted);
          setCurrentPath(path);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [repoName, branch]
  );

  useEffect(() => {
    fetchContents('');
  }, [fetchContents]);

  const handleItemClick = (item) => {
    if (item.type === 'dir') {
      setSelectedFile(null);
      const newPath = currentPath ? `${currentPath}/${item.name}` : item.name;
      fetchContents(newPath);
      setBreadcrumbs((prev) => [...prev, { name: item.name, path: newPath }]);
    } else {
      setSelectedFile(item);
    }
  };

  const handleBreadcrumbClick = (path) => {
    setSelectedFile(null);
    fetchContents(path);
    if (!path) {
      setBreadcrumbs([]);
    } else {
      const idx = breadcrumbs.findIndex((b) => b.path === path);
      if (idx !== -1) {
        setBreadcrumbs(breadcrumbs.slice(0, idx + 1));
      }
    }
  };

  const handleHomeClick = () => {
    setSelectedFile(null);
    setBreadcrumbs([]);
    fetchContents('');
  };

  const containerHeight = isMaximized ? 'calc(100vh - 60px)' : 680;
  const treeHeight = isMaximized ? 'calc(100vh - 120px)' : 600;

  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid #e5e5e5',
        borderRadius: 2,
        overflow: 'hidden',
        mb: 6,
        backgroundColor: '#ffffff',
        boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
        ...(isMaximized && {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          mb: 0,
        }),
      }}
    >
      {/* Browser Header */}
      <Box
        sx={{
          px: 3,
          py: 1.8,
          borderBottom: '1px solid #e5e5e5',
          backgroundColor: '#fafafa',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction="row" alignItems="center" gap={1.5}>
          <FolderOpenIcon sx={{ fontSize: 20, color: '#000000' }} />
          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '0.95rem', color: '#000000', letterSpacing: '0.5px' }}>
            IDE EXPLORER
          </Typography>
          <Chip
            label={branch}
            size="small"
            icon={<CodeIcon sx={{ fontSize: '14px !important', color: '#ffffff !important' }} />}
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              height: 24,
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: 1,
            }}
          />
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="caption" sx={{ color: '#666666', display: { xs: 'none', md: 'block' } }}>
            {isMaximized ? 'Fullscreen Mode' : 'Standard View'}
          </Typography>
          <Tooltip title={isMaximized ? 'Exit Fullscreen' : 'Maximize IDE'}>
            <IconButton
              size="small"
              onClick={() => setIsMaximized(!isMaximized)}
              sx={{ color: '#000000', border: '1px solid #e5e5e5', borderRadius: 1 }}
            >
              {isMaximized ? <CloseFullscreenIcon fontSize="small" /> : <OpenInFullIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      {/* Breadcrumb Navigation */}
      <Box
        sx={{
          px: 2.5,
          py: 1.2,
          borderBottom: '1px solid #e5e5e5',
          backgroundColor: '#ffffff',
        }}
      >
        <Breadcrumbs
          separator={<ChevronRightIcon sx={{ fontSize: 16, color: '#888888' }} />}
          sx={{ fontSize: '0.85rem' }}
        >
          <Link
            underline="hover"
            onClick={handleHomeClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.8,
              cursor: 'pointer',
              color: breadcrumbs.length === 0 ? '#000000' : '#666666',
              fontWeight: breadcrumbs.length === 0 ? 700 : 500,
            }}
          >
            <HomeIcon sx={{ fontSize: 16 }} />
            {repoName}
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <Link
              key={crumb.path}
              underline="hover"
              onClick={() => handleBreadcrumbClick(crumb.path)}
              sx={{
                cursor: 'pointer',
                color: i === breadcrumbs.length - 1 ? '#000000' : '#666666',
                fontWeight: i === breadcrumbs.length - 1 ? 700 : 500,
              }}
            >
              {crumb.name}
            </Link>
          ))}
        </Breadcrumbs>
      </Box>

      {/* Main IDE Workspace */}
      <Grid container sx={{ height: containerHeight }}>
        {/* File Tree Sidebar */}
        <Grid
          size={{ xs: 12, md: selectedFile ? 3.5 : 12 }}
          sx={{
            height: treeHeight,
            overflowY: 'auto',
            backgroundColor: '#ffffff',
          }}
        >
          {loading && (
            <Box sx={{ p: 3 }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={32}
                  sx={{ mb: 1, borderRadius: 1, bgcolor: '#f5f5f5' }}
                />
              ))}
            </Box>
          )}

          {error && (
            <Alert severity="error" sx={{ m: 2, borderRadius: 1 }}>
              {error}
            </Alert>
          )}

          {!loading && !error && (
            <Box sx={{ py: 1.5 }}>
              {currentPath && (
                <Box
                  onClick={() => {
                    const parentPath = currentPath.split('/').slice(0, -1).join('/');
                    setSelectedFile(null);
                    fetchContents(parentPath);
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.2,
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    color: '#666666',
                    '&:hover': { color: '#000000', bgcolor: '#f5f5f5' },
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 16, transform: 'rotate(180deg)' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                    .. (Parent Directory)
                  </Typography>
                </Box>
              )}

              {items.map((item) => (
                <FileTreeItem
                  key={item.sha || item.path}
                  item={item}
                  onFileClick={handleItemClick}
                  selectedFile={selectedFile}
                />
              ))}
            </Box>
          )}
        </Grid>

        {/* Code Viewer Panel */}
        {selectedFile && (
          <Grid size={{ xs: 12, md: 8.5 }} sx={{ height: treeHeight, display: 'flex', flexDirection: 'column' }}>
            <CodeViewer
              file={selectedFile}
              repoName={repoName}
              branch={branch}
              onClose={() => setSelectedFile(null)}
              isMaximized={isMaximized}
              onToggleMaximize={() => setIsMaximized(!isMaximized)}
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

// ─── Main Project Detail Page Component ─────────────────────────────────────
const ProjectDetail = () => {
  const { repoName } = useParams();
  const navigate = useNavigate();

  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readme, setReadme] = useState('');
  const [readmeLoading, setReadmeLoading] = useState(true);
  const [commits, setCommits] = useState([]);
  const [activeTab, setActiveTab] = useState('explorer');

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        setLoading(true);
        setError(null);

        const repoRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`);
        if (!repoRes.ok) throw new Error(`Repository not found (${repoRes.status})`);
        const repoData = await repoRes.json();
        setRepo(repoData);

        // Fetch README
        try {
          const readmeRes = await fetch(
            `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/${repoData.default_branch || 'main'}/README.md`
          );
          if (readmeRes.ok) {
            setReadme(await readmeRes.text());
          }
        } catch {
          // ignore readme errors
        } finally {
          setReadmeLoading(false);
        }

        // Fetch Recent Commits
        try {
          const commitsRes = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=5`
          );
          if (commitsRes.ok) {
            setCommits(await commitsRes.json());
          }
        } catch {
          // ignore commit errors
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (repoName) fetchRepoData();
  }, [repoName]);

  if (loading) {
    return (
      <Box sx={{ py: 8, backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <Container maxWidth="lg">
          <Skeleton variant="rectangular" height={40} width={150} sx={{ mb: 4, borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={100} sx={{ mb: 4, borderRadius: 2 }} />
          <Grid container spacing={3}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <Skeleton variant="rectangular" height={90} sx={{ borderRadius: 2 }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }

  if (error || !repo) {
    return (
      <Box sx={{ py: 12, backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <Container maxWidth="md">
          <Alert severity="error" sx={{ mb: 4, borderRadius: 1 }}>
            {error || 'Repository details could not be loaded.'}
          </Alert>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/projects')}
            sx={{ borderColor: '#000000', color: '#000000' }}
          >
            Back to Projects
          </Button>
        </Container>
      </Box>
    );
  }

  const formattedDate = (d) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff', color: '#000000', minHeight: '90vh' }}>
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          sx={{
            mb: 4,
            color: '#444444',
            fontWeight: 600,
            fontSize: '0.95rem',
            '&:hover': {
              color: '#000000',
              bgcolor: '#f5f5f5',
            },
          }}
        >
          Back to Projects
        </Button>

        {/* Top Header Card */}
        <Box
          sx={{
            p: { xs: 3.5, md: 5 },
            bgcolor: '#fafafa',
            border: '1px solid #e5e5e5',
            borderRadius: 2,
            mb: 6,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 3,
              mb: 3,
            }}
          >
            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  letterSpacing: '-1.5px',
                  color: '#000000',
                  mb: 1.5,
                }}
              >
                {repo.name}
              </Typography>

              <Typography
                sx={{
                  color: '#555555',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  maxWidth: 750,
                }}
              >
                {repo.description || 'No description provided.'}
              </Typography>
            </Box>

            <Stack direction="row" spacing={1.5} flexWrap="wrap">
              {repo.homepage && (
                <Button
                  variant="outlined"
                  startIcon={<OpenInNewIcon />}
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: '#000000',
                    color: '#000000',
                    borderRadius: 1,
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#f5f5f5', borderColor: '#000000' },
                  }}
                >
                  Live Demo
                </Button>
              )}
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#000000',
                  color: '#ffffff',
                  borderRadius: 1,
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#222222' },
                }}
              >
                GitHub Repo
              </Button>
            </Stack>
          </Box>

          {/* Topics & Languages */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
            {repo.language && (
              <Chip
                label={repo.language}
                size="small"
                sx={{
                  bgcolor: '#000000',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: 1,
                  px: 1,
                }}
              />
            )}
            {(repo.topics || []).map((topic) => (
              <Chip
                key={topic}
                label={topic}
                size="small"
                sx={{
                  bgcolor: '#ffffff',
                  color: '#000000',
                  border: '1px solid #e5e5e5',
                  borderRadius: 1,
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid size={{ xs: 6, sm: 3 }}>
            <StatCard icon={<StarIcon sx={{ fontSize: 22 }} />} label="Stars" value={repo.stargazers_count} />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <StatCard icon={<ForkRightIcon sx={{ fontSize: 22 }} />} label="Forks" value={repo.forks_count} />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <StatCard icon={<VisibilityIcon sx={{ fontSize: 22 }} />} label="Watchers" value={repo.watchers_count} />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <StatCard icon={<BugReportIcon sx={{ fontSize: 22 }} />} label="Issues" value={repo.open_issues_count} />
          </Grid>
        </Grid>

        {/* Tab View Selector */}
        <Stack direction="row" spacing={1.5} sx={{ mb: 4 }}>
          <Button
            variant={activeTab === 'explorer' ? 'contained' : 'outlined'}
            onClick={() => setActiveTab('explorer')}
            sx={{
              borderRadius: 1,
              px: 3,
              py: 1,
              fontWeight: 600,
              ...(activeTab === 'explorer'
                ? { bgcolor: '#000000', color: '#ffffff' }
                : { borderColor: '#e5e5e5', color: '#000000' }),
            }}
          >
            Code Explorer
          </Button>

          {readme && (
            <Button
              variant={activeTab === 'readme' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('readme')}
              sx={{
                borderRadius: 1,
                px: 3,
                py: 1,
                fontWeight: 600,
                ...(activeTab === 'readme'
                  ? { bgcolor: '#000000', color: '#ffffff' }
                  : { borderColor: '#e5e5e5', color: '#000000' }),
              }}
            >
              README.md
            </Button>
          )}

          {commits.length > 0 && (
            <Button
              variant={activeTab === 'commits' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('commits')}
              sx={{
                borderRadius: 1,
                px: 3,
                py: 1,
                fontWeight: 600,
                ...(activeTab === 'commits'
                  ? { bgcolor: '#000000', color: '#ffffff' }
                  : { borderColor: '#e5e5e5', color: '#000000' }),
              }}
            >
              Recent Commits
            </Button>
          )}
        </Stack>

        {/* Tab 1: Code Explorer */}
        {activeTab === 'explorer' && (
          <RepoBrowser repoName={repoName} branch={repo.default_branch || 'main'} />
        )}

        {/* Tab 2: README View */}
        {activeTab === 'readme' && (
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              bgcolor: '#ffffff',
              border: '1px solid #e5e5e5',
              borderRadius: 2,
              mb: 6,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#000000' }}>
              README.md
            </Typography>
            <Box
              component="pre"
              sx={{
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: '#333333',
                bgcolor: '#fafafa',
                p: 3,
                borderRadius: 1,
                border: '1px solid #e5e5e5',
              }}
            >
              {readme}
            </Box>
          </Paper>
        )}

        {/* Tab 3: Commits View */}
        {activeTab === 'commits' && (
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              bgcolor: '#ffffff',
              border: '1px solid #e5e5e5',
              borderRadius: 2,
              mb: 6,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#000000' }}>
              Recent Commits
            </Typography>
            <Stack spacing={2}>
              {commits.map((c) => (
                <Box
                  key={c.sha}
                  sx={{
                    p: 2.5,
                    bgcolor: '#fafafa',
                    border: '1px solid #e5e5e5',
                    borderRadius: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 1.5,
                  }}
                >
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: '#000000', mb: 0.5 }}>
                      {c.commit.message}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666666' }}>
                      by {c.commit.author?.name} · {formattedDate(c.commit.author?.date)}
                    </Typography>
                  </Box>
                  <Chip
                    label={c.sha.substring(0, 7)}
                    size="small"
                    component="a"
                    href={c.html_url}
                    target="_blank"
                    clickable
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      bgcolor: '#ffffff',
                      border: '1px solid #e5e5e5',
                      color: '#000000',
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Paper>
        )}

        {/* Repository Metadata Breakdown */}
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: '#ffffff',
            border: '1px solid #e5e5e5',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#000000', mb: 2 }}>
            Repository Details
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <InfoRow icon={<AccountTreeIcon sx={{ fontSize: 18 }} />} label="Default Branch" value={repo.default_branch} />
              <InfoRow icon={<CalendarTodayIcon sx={{ fontSize: 18 }} />} label="Created On" value={formattedDate(repo.created_at)} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <InfoRow icon={<UpdateIcon sx={{ fontSize: 18 }} />} label="Last Updated" value={formattedDate(repo.updated_at)} />
              <InfoRow icon={<CodeIcon sx={{ fontSize: 18 }} />} label="Primary Language" value={repo.language} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetail;