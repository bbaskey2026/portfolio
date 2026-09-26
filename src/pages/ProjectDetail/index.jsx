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
  if (type === 'dir') return <FolderIcon sx={{ fontSize: 18, color: '#F5A623' }} />;
  const ext = filename.split('.').pop()?.toLowerCase();
  const colorMap = {
    js: '#F7DF1E', jsx: '#61DAFB', ts: '#3178C6', tsx: '#61DAFB',
    py: '#3572A5', rb: '#CC342D', java: '#B07219', html: '#E34C26',
    css: '#563D7C', scss: '#C6538C', json: '#40BF6A', md: '#083FA1',
    sh: '#89E051', go: '#00ADD8', rs: '#DEA584',
  };
  return (
    <InsertDriveFileIcon
      sx={{ fontSize: 18, color: colorMap[ext] || '#888888' }}
    />
  );
};

// ─── Sub-components ──────────────────────────────────────────────────────────
const StatCard = ({ icon, label, value }) => (
  <Paper
    elevation={0}
    sx={{
      border: '1px solid #222222',
      borderRadius: '14px',
      p: 2.5,
      textAlign: 'center',
      height: '100%',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 0.8,
      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      '&:hover': {
        borderColor: '#444444',
        backgroundColor: '#111111',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <Box sx={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>{icon}</Box>
    <Typography variant="h5" sx={{ fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
      {value ?? '—'}
    </Typography>
    <Typography variant="caption" sx={{ color: '#888888', fontSize: '0.78rem', fontWeight: 500 }}>
      {label}
    </Typography>
  </Paper>
);

const InfoRow = ({ icon, label, value }) => (
  <Stack direction="row" alignItems="center" gap={1.5} sx={{ py: 1.5 }}>
    <Box sx={{ color: '#888888', display: 'flex' }}>{icon}</Box>
    <Typography variant="body2" sx={{ color: '#888888', minWidth: 120, fontSize: '0.85rem' }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ color: '#ededed', fontWeight: 500, fontSize: '0.85rem' }}>
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
        borderRadius: '6px',
        mx: 0.5,
        backgroundColor: isSelected ? '#1c1c1c' : 'transparent',
        border: isSelected ? '1px solid #333333' : '1px solid transparent',
        transition: 'all 0.15s ease',
        '&:hover': {
          backgroundColor: isSelected ? '#1c1c1c' : '#141414',
        },
      }}
    >
      {item.type === 'dir' && (
        <ChevronRightIcon sx={{ fontSize: 16, color: '#888888', flexShrink: 0 }} />
      )}
      {getFileIcon(item.name, item.type)}
      <Typography
        variant="body2"
        sx={{
          color: isSelected ? '#ffffff' : '#a1a1a1',
          fontWeight: isSelected ? 600 : 400,
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
          sx={{ color: '#666666', fontSize: '0.7rem', ml: 'auto', flexShrink: 0 }}
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
        borderLeft: '1px solid #222222',
        borderRadius: 0,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0a0a0a',
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
          backgroundColor: '#0f0f0f',
          borderBottom: '1px solid #222222',
          minHeight: 50,
        }}
      >
        <Stack direction="row" alignItems="center" gap={1.5}>
          {getFileIcon(file.name, 'file')}
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#ffffff', fontSize: '0.9rem' }}>
            {file.name}
          </Typography>
          {!loading && (
            <Chip
              label={language}
              size="small"
              sx={{
                fontSize: '0.7rem',
                height: 22,
                backgroundColor: '#171717',
                color: '#a1a1a1',
                border: '1px solid #262626',
                fontWeight: 600,
                borderRadius: '4px',
              }}
            />
          )}
          {!loading && (
            <Typography variant="caption" sx={{ color: '#666666', fontSize: '0.75rem' }}>
              {lineCount} lines
            </Typography>
          )}
        </Stack>

        <Stack direction="row" gap={0.5}>
          <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
            <IconButton
              size="small"
              onClick={handleCopy}
              disabled={loading || !!error}
              sx={{ color: copied ? '#4ade80' : '#888888', '&:hover': { color: '#ffffff' } }}
            >
              {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
            </IconButton>
          </Tooltip>

          <Tooltip title={isMaximized ? 'Exit Fullscreen' : 'Maximize IDE'}>
            <IconButton size="small" onClick={onToggleMaximize} sx={{ color: '#888888', '&:hover': { color: '#ffffff' } }}>
              {isMaximized ? <CloseFullscreenIcon fontSize="small" /> : <OpenInFullIcon fontSize="small" />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Open on GitHub">
            <IconButton
              size="small"
              component="a"
              href={file.html_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#888888', '&:hover': { color: '#ffffff' } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Close file">
            <IconButton size="small" onClick={onClose} sx={{ color: '#888888', '&:hover': { color: '#ffffff' } }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      {/* Code Content */}
      <Box sx={{ overflow: 'auto', height: editorHeight, flexGrow: 1, backgroundColor: '#050505' }}>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress size={32} sx={{ color: '#ffffff' }} />
          </Box>
        )}
        {error && (
          <Alert severity="error" sx={{ m: 3, borderRadius: '8px', backgroundColor: '#2d0607', color: '#f87171', border: '1px solid #991b1b' }}>
            {error}
          </Alert>
        )}
        {!loading && !error && (
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            showLineNumbers
            wrapLines
            customStyle={{
              margin: 0,
              padding: '20px 0',
              borderRadius: 0,
              fontSize: '0.88rem',
              lineHeight: '1.6',
              backgroundColor: '#050505',
              minHeight: '100%',
              fontFamily: `'Geist Mono', 'Fira Code', 'Consolas', monospace`,
            }}
            lineNumberStyle={{
              color: '#444444',
              fontSize: '0.8rem',
              userSelect: 'none',
              minWidth: '3.5em',
              paddingRight: '1em',
              textAlign: 'right',
            }}
          >
            {code}
          </SyntaxHighlighter>
        )}
      </Box>
    </Paper>
  );
};

// ─── File Browser ─────────────────────────────────────────────────────────────
const FileBrowser = ({ repoName, branch }) => {
  const [currentPath, setCurrentPath] = useState('');
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);

  const fetchContents = useCallback(async (path = '') => {
    try {
      setLoading(true);
      setError(null);

      const url = path
        ? `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/${path}?ref=${branch}`
        : `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents?ref=${branch}`;

      const res = await fetch(url, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });

      if (!res.ok) throw new Error('Failed to load directory contents.');

      const data = await res.json();

      const sorted = [...data].sort((a, b) => {
        if (a.type === b.type) return a.name.localeCompare(b.name);
        return a.type === 'dir' ? -1 : 1;
      });

      setContents(sorted);
      setCurrentPath(path);

      if (path) {
        const parts = path.split('/');
        setBreadcrumbs(parts.map((part, i) => ({
          name: part,
          path: parts.slice(0, i + 1).join('/'),
        })));
      } else {
        setBreadcrumbs([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [repoName, branch]);

  useEffect(() => {
    fetchContents('');
  }, [fetchContents]);

  const handleItemClick = (item) => {
    if (item.type === 'dir') {
      setSelectedFile(null);
      fetchContents(item.path);
    } else {
      setSelectedFile(item);
    }
  };

  const handleBreadcrumbClick = (path) => {
    setSelectedFile(null);
    fetchContents(path);
  };

  const handleHomeClick = () => {
    setSelectedFile(null);
    fetchContents('');
  };

  const containerHeight = isMaximized ? '100vh' : 730;
  const treeHeight = isMaximized ? 'calc(100vh - 110px)' : 680;

  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid #222222',
        borderRadius: isMaximized ? 0 : '12px',
        overflow: 'hidden',
        mb: 5,
        backgroundColor: '#0a0a0a',
        boxShadow: '0 12px 40px rgba(0,0,0,0.8)',
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
          borderBottom: '1px solid #222222',
          backgroundColor: '#050505',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction="row" alignItems="center" gap={1.5}>
          <FolderOpenIcon sx={{ fontSize: 20, color: '#F5A623' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', letterSpacing: '0.5px' }}>
            IDE EXPLORER
          </Typography>
          <Chip
            label={branch}
            size="small"
            icon={<CodeIcon sx={{ fontSize: '14px !important', color: '#000000 !important' }} />}
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              height: 24,
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRadius: '4px',
            }}
          />
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="caption" sx={{ color: '#888888', display: { xs: 'none', md: 'block' } }}>
            {isMaximized ? 'Fullscreen Mode' : 'Standard View'}
          </Typography>
          <Tooltip title={isMaximized ? 'Exit Fullscreen' : 'Maximize IDE'}>
            <IconButton
              size="small"
              onClick={() => setIsMaximized(!isMaximized)}
              sx={{ color: '#ffffff', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
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
          borderBottom: '1px solid #222222',
          backgroundColor: '#0d0d0d',
        }}
      >
        <Breadcrumbs
          separator={<ChevronRightIcon sx={{ fontSize: 16, color: '#666666' }} />}
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
              color: breadcrumbs.length === 0 ? '#ffffff' : '#888888',
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
                color: i === breadcrumbs.length - 1 ? '#ffffff' : '#888888',
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
          size={{ xs: 12, md: selectedFile ? 3 : 12 }}
          sx={{
            height: treeHeight,
            overflowY: 'auto',
            backgroundColor: '#0a0a0a',
          }}
        >
          {loading && (
            <Box sx={{ p: 3 }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={36}
                  sx={{ mb: 0.8, borderRadius: 1, backgroundColor: '#171717' }}
                />
              ))}
            </Box>
          )}

          {error && (
            <Alert severity="error" sx={{ m: 2, borderRadius: '8px', backgroundColor: '#2d0607', color: '#f87171', border: '1px solid #991b1b' }}>
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
                    color: '#888888',
                    '&:hover': { backgroundColor: '#171717', color: '#ffffff', borderRadius: '6px', mx: 0.5 },
                    fontSize: '0.85rem',
                    mb: 0.5,
                    fontWeight: 600,
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 16 }} />
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                    .. (Parent Directory)
                  </Typography>
                </Box>
              )}

              {contents.length === 0 && (
                <Typography variant="body2" sx={{ color: '#666666', textAlign: 'center', py: 6 }}>
                  Empty directory
                </Typography>
              )}

              {contents.map((item) => (
                <FileTreeItem
                  key={item.sha}
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
          <Grid size={{ xs: 12, md: 9 }} sx={{ height: treeHeight, overflow: 'hidden' }}>
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

      {/* Browser Footer */}
      {!loading && !error && (
        <Box
          sx={{
            px: 3,
            py: 1,
            borderTop: '1px solid #222222',
            backgroundColor: '#050505',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="caption" sx={{ color: '#888888', fontWeight: 500, fontSize: '0.75rem' }}>
            {contents.filter((c) => c.type === 'dir').length} folders,{' '}
            {contents.filter((c) => c.type === 'file').length} files
          </Typography>
          {selectedFile && (
            <Typography variant="caption" sx={{ color: '#ffffff', fontWeight: 500, fontSize: '0.75rem', fontFamily: 'monospace' }}>
              {selectedFile.path}
            </Typography>
          )}
        </Box>
      )}
    </Paper>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const ProjectDetail = () => {
  const { repoName } = useParams();
  const navigate = useNavigate();

  const [repo, setRepo] = useState(null);
  const [languages, setLanguages] = useState({});
  const [contributors, setContributors] = useState([]);
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const headers = { Accept: 'application/vnd.github.mercy-preview+json' };

        const [repoRes, langRes, contribRes, branchRes] = await Promise.allSettled([
          fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, { headers }),
          fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`, { headers }),
          fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contributors?per_page=5`, { headers }),
          fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/branches`, { headers }),
        ]);

        if (repoRes.status === 'fulfilled' && repoRes.value.ok) {
          setRepo(await repoRes.value.json());
        } else {
          throw new Error('Repository not found or unavailable.');
        }
        if (langRes.status === 'fulfilled' && langRes.value.ok) setLanguages(await langRes.value.json());
        if (contribRes.status === 'fulfilled' && contribRes.value.ok) setContributors(await contribRes.value.json());
        if (branchRes.status === 'fulfilled' && branchRes.value.ok) setBranches(await branchRes.value.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoDetails();
  }, [repoName]);

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <Box sx={{ py: 8, backgroundColor: '#000000', minHeight: '100vh', color: '#ededed' }}>
        <Container maxWidth="lg">
          <Skeleton variant="rectangular" height={40} width={120} sx={{ mb: 4, borderRadius: 2, backgroundColor: '#171717' }} />
          <Skeleton variant="rectangular" height={60} width="60%" sx={{ mb: 2, borderRadius: 2, backgroundColor: '#171717' }} />
          <Skeleton variant="rectangular" height={24} width="40%" sx={{ mb: 4, borderRadius: 2, backgroundColor: '#171717' }} />
          <Stack direction="row" gap={2} sx={{ mb: 6 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} variant="rectangular" height={90} sx={{ flex: 1, borderRadius: 2, backgroundColor: '#171717' }} />
            ))}
          </Stack>
          <Skeleton variant="rectangular" height={650} sx={{ borderRadius: 2, mb: 3, backgroundColor: '#171717' }} />
        </Container>
      </Box>
    );
  }

  // ── Error ────────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <Box sx={{ py: 8, backgroundColor: '#000000', minHeight: '100vh', color: '#ededed' }}>
        <Container maxWidth="lg">
          <Alert severity="error" sx={{ mb: 4, borderRadius: '8px', backgroundColor: '#2d0607', color: '#f87171', border: '1px solid #991b1b' }}>{error}</Alert>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/projects')}
            sx={{ color: '#ffffff', fontWeight: 600 }}
          >
            Back to Projects
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, backgroundColor: '#000000', minHeight: '100vh', color: '#ededed' }}>
      <Container maxWidth="lg">

        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          sx={{
            mb: 4, color: '#a1a1a1', fontWeight: 500, px: 0,
            '&:hover': { color: '#ffffff', backgroundColor: 'transparent' },
          }}
        >
          Back to Projects
        </Button>

        {/* Hero */}
        <Box sx={{ mb: 5 }}>
          <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
            <Chip
              label={repo.private ? 'Private' : 'Public'}
              size="small"
              sx={{
                backgroundColor: repo.private ? '#331a00' : '#072711',
                color: repo.private ? '#fb923c' : '#4ade80',
                border: `1px solid ${repo.private ? '#7c2d12' : '#166534'}`,
                fontWeight: 600,
              }}
            />
            {repo.archived && (
              <Chip label="Archived" size="small" sx={{ backgroundColor: '#1a1a1a', color: '#888888', border: '1px solid #333333', fontWeight: 600 }} />
            )}
          </Stack>

          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: '#ffffff', mb: 1.5, fontSize: { xs: '1.8rem', md: '2.5rem' }, lineHeight: 1.2, letterSpacing: '-0.03em' }}
          >
            {repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </Typography>

          <Typography variant="body1" sx={{ color: '#a1a1a1', lineHeight: 1.7, mb: 3, maxWidth: 700, fontSize: '1.05rem' }}>
            {repo.description || 'No description provided for this repository.'}
          </Typography>

          {repo.topics?.length > 0 && (
            <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mb: 3.5 }}>
              {repo.topics.map((topic) => (
                <Chip
                  key={topic}
                  label={topic}
                  size="small"
                  sx={{ backgroundColor: '#141414', color: '#a1a1a1', border: '1px solid #262626', fontWeight: 500, borderRadius: '9999px', fontSize: '0.8rem', px: 1, py: 0.5 }}
                />
              ))}
            </Stack>
          )}

          <Stack direction="row" gap={2.5} flexWrap="wrap">
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#ffffff', color: '#000000', borderRadius: '9999px',
                border: '1px solid #ffffff',
                px: 3.5, py: 1.3, fontWeight: 600, textTransform: 'none',
                '&:hover': { backgroundColor: '#eaeaea', borderColor: '#eaeaea' },
              }}
            >
              View on GitHub
            </Button>
            {repo.homepage && (
              <Button
                variant="outlined"
                startIcon={<OpenInNewIcon />}
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: '#333333', color: '#ededed', borderRadius: '9999px',
                  backgroundColor: '#0a0a0a',
                  px: 3.5, py: 1.3, fontWeight: 600, textTransform: 'none',
                  '&:hover': { borderColor: '#666666', backgroundColor: '#171717' },
                }}
              >
                Live Demo
              </Button>
            )}
          </Stack>
        </Box>

        {/* Stats Row */}
        <Grid container spacing={2.5} sx={{ mb: 5 }}>
          <Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
            <StatCard icon={<StarIcon fontSize="small" sx={{ color: '#F5A623' }} />} label="Stars" value={repo.stargazers_count} />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
            <StatCard icon={<ForkRightIcon fontSize="small" sx={{ color: '#a1a1a1' }} />} label="Forks" value={repo.forks_count} />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
            <StatCard icon={<VisibilityIcon fontSize="small" sx={{ color: '#60a5fa' }} />} label="Watchers" value={repo.watchers_count} />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
            <StatCard icon={<BugReportIcon fontSize="small" sx={{ color: '#f87171' }} />} label="Open Issues" value={repo.open_issues_count} />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 2.4 }}>
            <StatCard icon={<AccountTreeIcon fontSize="small" sx={{ color: '#34d399' }} />} label="Branches" value={branches.length} />
          </Grid>
        </Grid>

        {/* ── File Browser ── */}
        <FileBrowser repoName={repo.name} branch={repo.default_branch} />

        {/* Main Content Grid */}
        <Grid container spacing={4}>

          {/* Left Column */}
          <Grid size={{ xs: 12, md: 8 }}>

            {/* Languages */}
            {Object.keys(languages).length > 0 && (
              <Paper elevation={0} sx={{ border: '1px solid #222222', borderRadius: '12px', p: 3, mb: 3, backgroundColor: '#0a0a0a' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: '#ffffff' }}>
                  Languages
                </Typography>
                <Box sx={{ height: 8, borderRadius: '10px', overflow: 'hidden', display: 'flex', mb: 2.5, backgroundColor: '#171717' }}>
                  {Object.entries(languages).map(([lang, bytes], i) => {
                    const colors = ['#F7DF1E', '#3572A5', '#f34b7d', '#00ADD8', '#e34c26', '#563d7c', '#89e051', '#3178c6'];
                    return (
                      <Box key={lang} sx={{ width: `${(bytes / totalBytes) * 100}%`, backgroundColor: colors[i % colors.length] }} />
                    );
                  })}
                </Box>
                <Stack direction="row" flexWrap="wrap" gap={2}>
                  {Object.entries(languages).map(([lang, bytes], i) => {
                    const colors = ['#F7DF1E', '#3572A5', '#f34b7d', '#00ADD8', '#e34c26', '#563d7c', '#89e051', '#3178c6'];
                    return (
                      <Stack key={lang} direction="row" alignItems="center" gap={0.8}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: colors[i % colors.length] }} />
                        <Typography variant="body2" sx={{ color: '#ededed', fontWeight: 500, fontSize: '0.85rem' }}>{lang}</Typography>
                        <Typography variant="caption" sx={{ color: '#888888' }}>
                          {((bytes / totalBytes) * 100).toFixed(1)}%
                        </Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </Paper>
            )}

            {/* Contributors */}
            {contributors.length > 0 && (
              <Paper elevation={0} sx={{ border: '1px solid #222222', borderRadius: '12px', p: 3, mb: 3, backgroundColor: '#0a0a0a' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: '#ffffff' }}>
                  Top Contributors
                </Typography>
                <Stack gap={1.5}>
                  {contributors.map((contributor) => (
                    <Stack
                      key={contributor.id}
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      component="a"
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: 'none', p: 1.5, borderRadius: '8px',
                        backgroundColor: '#0d0d0d', border: '1px solid #1f1f1f',
                        transition: 'all 0.15s ease',
                        '&:hover': { backgroundColor: '#171717', borderColor: '#333333' },
                      }}
                    >
                      <Stack direction="row" alignItems="center" gap={1.5}>
                        <Box
                          component="img"
                          src={contributor.avatar_url}
                          alt={contributor.login}
                          sx={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #333333' }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#ffffff' }}>
                          {contributor.login}
                        </Typography>
                      </Stack>
                      <Chip
                        label={`${contributor.contributions} commits`}
                        size="small"
                        sx={{ backgroundColor: '#171717', color: '#a1a1a1', border: '1px solid #262626', fontSize: '0.7rem', fontWeight: 500 }}
                      />
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            )}

            {/* Branches */}
            {branches.length > 0 && (
              <Paper elevation={0} sx={{ border: '1px solid #222222', borderRadius: '12px', p: 3, backgroundColor: '#0a0a0a' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: '#ffffff' }}>
                  Branches
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {branches.map((branch) => (
                    <Chip
                      key={branch.name}
                      label={branch.name}
                      icon={<CodeIcon sx={{ fontSize: '14px !important', color: branch.name === repo.default_branch ? '#000000 !important' : '#888888 !important' }} />}
                      size="small"
                      sx={{
                        backgroundColor: branch.name === repo.default_branch ? '#ffffff' : '#141414',
                        color: branch.name === repo.default_branch ? '#000000' : '#a1a1a1',
                        fontWeight: branch.name === repo.default_branch ? 600 : 400,
                        border: '1px solid',
                        borderColor: branch.name === repo.default_branch ? '#ffffff' : '#262626',
                        borderRadius: '6px',
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            )}
          </Grid>

          {/* Right Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{ border: '1px solid #222222', borderRadius: '12px', p: 3, position: 'sticky', top: 24, backgroundColor: '#0a0a0a' }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#ffffff' }}>
                Repository Info
              </Typography>
              <Divider sx={{ mb: 1.5, borderColor: '#222222' }} />
              <InfoRow icon={<CalendarTodayIcon fontSize="small" />} label="Created" value={formatDate(repo.created_at)} />
              <Divider sx={{ borderColor: '#1a1a1a' }} />
              <InfoRow icon={<UpdateIcon fontSize="small" />} label="Last Updated" value={formatDate(repo.updated_at)} />
              <Divider sx={{ borderColor: '#1a1a1a' }} />
              <InfoRow icon={<CodeIcon fontSize="small" />} label="Language" value={repo.language || 'Not specified'} />
              <Divider sx={{ borderColor: '#1a1a1a' }} />
              <InfoRow icon={<AccountTreeIcon fontSize="small" />} label="Default Branch" value={repo.default_branch} />
              <Divider sx={{ borderColor: '#1a1a1a' }} />
              <InfoRow icon={<ForkRightIcon fontSize="small" />} label="License" value={repo.license?.name || 'No license'} />

              <Box sx={{ mt: 2.5, p: 2, backgroundColor: '#050505', border: '1px solid #1a1a1a', borderRadius: '8px' }}>
                <Typography variant="caption" sx={{ color: '#888888', display: 'block', mb: 0.5 }}>
                  Clone URL
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: '#ededed', fontFamily: 'monospace', fontSize: '0.72rem', wordBreak: 'break-all' }}
                >
                  {repo.clone_url}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetail;