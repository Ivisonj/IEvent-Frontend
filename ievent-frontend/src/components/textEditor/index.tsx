'use client'
import { Box } from '@mui/material'
import './styles.scss'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

import MenuBar from './menuBar'
import IButton from '../Ibutton'

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
]

const content = `<p>Hey! você pode digitar o seu texto aqui...</p>`

const TextEditor = () => {
  return (
    <>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
      />
      <Box
        mt={3}
        width="100%"
        height="auto"
        display="flex"
        justifyContent="center"
      >
        <IButton type="button" width="300px">
          Enviar
        </IButton>
      </Box>
    </>
  )
}

export default TextEditor
