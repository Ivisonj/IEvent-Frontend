import React from 'react'
import { Box, useTheme } from '@mui/material'
import { useCurrentEditor } from '@tiptap/react'

import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'

const MenuBar = () => {
  const theme = useTheme()
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const buttonStyle = {
    width: 'auto',
    height: '38px',
    padding: '5px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          mb: 1,
          flexWrap: 'wrap',
          border: `solid 1px ${theme.palette.grey[300]}`,
          borderRadius: '5px 5px 0px 0px',
        }}
      >
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('bold')
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('bold')
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          <FormatBoldIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('italic')
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('italic')
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          <FormatItalicIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('strike')
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('strike')
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          <StrikethroughSIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('paragraph')
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('paragraph')
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          Parágrafo
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
          }
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('heading', { level: 1 })
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('heading', { level: 1 })
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
          }
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('heading', { level: 2 })
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('heading', { level: 2 })
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
          }
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('heading', { level: 3 })
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('heading', { level: 3 })
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('bulletList')
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('bulletList')
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          <FormatListBulletedIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          style={{
            ...buttonStyle,
            backgroundColor: editor.isActive('orderedList')
              ? theme.palette.primary.dark
              : theme.palette.common.white,
            color: editor.isActive('orderedList')
              ? theme.palette.common.white
              : theme.palette.common.black,
          }}
        >
          <FormatListNumberedIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          style={buttonStyle}
        >
          <HorizontalRuleIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          style={buttonStyle}
        >
          <UndoIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          style={buttonStyle}
        >
          <RedoIcon />
        </button>
      </Box>
    </>
  )
}

export default MenuBar
