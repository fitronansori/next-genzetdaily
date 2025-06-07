"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import CharacterCount from "@tiptap/extension-character-count";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link as LinkIcon,
  Image as ImageIcon,
  Table as TableIcon,
  Subscript as SubscriptIcon,
  Superscript as SuperscriptIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ToolbarButton from "./ToolbarButton";
import ColorPicker from "./ColorPicker";

interface TiptapProps {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  editable?: boolean;
  className?: string;
  min_height?: string;
}

const Tiptap = ({
  content = "<p>Mulai menulis artikel keren disini... 🚀</p>",
  onChange,
  placeholder = "Tulis sesuatu yang amazing...",
  editable = true,
  className,
  min_height = "400px",
}: TiptapProps) => {
  const editor_instance = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color.configure({
        types: ["textStyle"],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      Subscript,
      Superscript,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline cursor-pointer",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg border-2 border-border",
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      CharacterCount,
    ],
    content,
    editable,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html_content = editor.getHTML();
      onChange?.(html_content);
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4",
        placeholder,
      },
    },
  });
  if (!editor_instance) {
    return (
      <div
        className={cn(
          "border-2 border-border rounded-lg bg-background shadow-shadow",
          className
        )}
      >
        {/* Loading Toolbar */}
        <div className="flex items-center gap-2 p-3 border-b-2 border-border bg-muted/30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-8 w-8 bg-muted rounded animate-pulse" />
          ))}
        </div>

        {/* Loading Editor */}
        <div className="p-4" style={{ minHeight: min_height }}>
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
            <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
            <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
          </div>
        </div>

        {/* Loading Status Bar */}
        <div className="flex justify-between items-center p-2 border-t-2 border-border bg-muted/30">
          <div className="h-3 bg-muted rounded animate-pulse w-32" />
          <div className="h-3 bg-muted rounded animate-pulse w-48" />
        </div>
      </div>
    );
  }

  const toolbar_buttons = [
    {
      name: "bold",
      icon: Bold,
      action: () => editor_instance.chain().focus().toggleBold().run(),
      is_active: () => editor_instance.isActive("bold"),
    },
    {
      name: "italic",
      icon: Italic,
      action: () => editor_instance.chain().focus().toggleItalic().run(),
      is_active: () => editor_instance.isActive("italic"),
    },
    {
      name: "underline",
      icon: UnderlineIcon,
      action: () => editor_instance.chain().focus().toggleUnderline().run(),
      is_active: () => editor_instance.isActive("underline"),
    },
    {
      name: "strike",
      icon: Strikethrough,
      action: () => editor_instance.chain().focus().toggleStrike().run(),
      is_active: () => editor_instance.isActive("strike"),
    },
    {
      name: "code",
      icon: Code,
      action: () => editor_instance.chain().focus().toggleCode().run(),
      is_active: () => editor_instance.isActive("code"),
    },
    {
      name: "subscript",
      icon: SubscriptIcon,
      action: () => editor_instance.chain().focus().toggleSubscript().run(),
      is_active: () => editor_instance.isActive("subscript"),
    },
    {
      name: "superscript",
      icon: SuperscriptIcon,
      action: () => editor_instance.chain().focus().toggleSuperscript().run(),
      is_active: () => editor_instance.isActive("superscript"),
    },
    {
      name: "heading1",
      icon: Heading1,
      action: () =>
        editor_instance.chain().focus().toggleHeading({ level: 1 }).run(),
      is_active: () => editor_instance.isActive("heading", { level: 1 }),
    },
    {
      name: "heading2",
      icon: Heading2,
      action: () =>
        editor_instance.chain().focus().toggleHeading({ level: 2 }).run(),
      is_active: () => editor_instance.isActive("heading", { level: 2 }),
    },
    {
      name: "heading3",
      icon: Heading3,
      action: () =>
        editor_instance.chain().focus().toggleHeading({ level: 3 }).run(),
      is_active: () => editor_instance.isActive("heading", { level: 3 }),
    },
    {
      name: "bulletList",
      icon: List,
      action: () => editor_instance.chain().focus().toggleBulletList().run(),
      is_active: () => editor_instance.isActive("bulletList"),
    },
    {
      name: "orderedList",
      icon: ListOrdered,
      action: () => editor_instance.chain().focus().toggleOrderedList().run(),
      is_active: () => editor_instance.isActive("orderedList"),
    },
    {
      name: "blockquote",
      icon: Quote,
      action: () => editor_instance.chain().focus().toggleBlockquote().run(),
      is_active: () => editor_instance.isActive("blockquote"),
    },
    {
      name: "alignLeft",
      icon: AlignLeft,
      action: () => editor_instance.chain().focus().setTextAlign("left").run(),
      is_active: () => editor_instance.isActive({ textAlign: "left" }),
    },
    {
      name: "alignCenter",
      icon: AlignCenter,
      action: () =>
        editor_instance.chain().focus().setTextAlign("center").run(),
      is_active: () => editor_instance.isActive({ textAlign: "center" }),
    },
    {
      name: "alignRight",
      icon: AlignRight,
      action: () => editor_instance.chain().focus().setTextAlign("right").run(),
      is_active: () => editor_instance.isActive({ textAlign: "right" }),
    },
    {
      name: "alignJustify",
      icon: AlignJustify,
      action: () =>
        editor_instance.chain().focus().setTextAlign("justify").run(),
      is_active: () => editor_instance.isActive({ textAlign: "justify" }),
    },
  ];

  const utility_buttons = [
    {
      name: "undo",
      icon: Undo,
      action: () => editor_instance.chain().focus().undo().run(),
      is_disabled: () => !editor_instance.can().undo(),
    },
    {
      name: "redo",
      icon: Redo,
      action: () => editor_instance.chain().focus().redo().run(),
      is_disabled: () => !editor_instance.can().redo(),
    },
  ];

  const add_link = () => {
    const url = window.prompt("URL");
    if (url) {
      editor_instance
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const add_image = () => {
    const url = window.prompt("Image URL");
    if (url) {
      editor_instance.chain().focus().setImage({ src: url }).run();
    }
  };
  const insert_table = () => {
    editor_instance
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  const add_table_row = () => {
    editor_instance.chain().focus().addRowAfter().run();
  };

  const delete_table = () => {
    editor_instance.chain().focus().deleteTable().run();
  };

  const set_text_color = (color: string) => {
    editor_instance.chain().focus().setColor(color).run();
  };
  const set_highlight_color = (color: string) => {
    editor_instance.chain().focus().setHighlight({ color }).run();
  };
  return (
    <div
      className={cn(
        "border-2 border-border rounded-lg bg-background shadow-shadow",
        className
      )}
    >
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-3 border-b-2 border-border bg-muted/30">
        {/* Utility Buttons */}
        {utility_buttons.map((button) => (
          <ToolbarButton
            key={button.name}
            icon={button.icon}
            onClick={button.action}
            is_disabled={button.is_disabled?.()}
            title={button.name}
          />
        ))}
        <div className="w-px h-6 bg-border mx-1" />
        {/* Format Buttons */}
        {toolbar_buttons.map((button) => (
          <ToolbarButton
            key={button.name}
            icon={button.icon}
            onClick={button.action}
            is_active={button.is_active()}
            title={button.name}
          />
        ))}
        <div className="w-px h-6 bg-border mx-1" />
        {/* Special Buttons */}
        <ToolbarButton icon={LinkIcon} onClick={add_link} title="Add Link" />
        <ToolbarButton icon={ImageIcon} onClick={add_image} title="Add Image" />
        <ToolbarButton
          icon={TableIcon}
          onClick={insert_table}
          title="Insert Table (3x3)"
        />
        {editor_instance.isActive("table") && (
          <>
            <ToolbarButton
              icon={TableIcon}
              onClick={add_table_row}
              title="Add Row"
            />
            <ToolbarButton
              icon={TableIcon}
              onClick={delete_table}
              title="Delete Table"
            />
          </>
        )}
        <div className="w-px h-6 bg-border mx-1" />
        {/* Color Picker */}
        <ColorPicker
          onTextColorChange={set_text_color}
          onHighlightColorChange={set_highlight_color}
        />
      </div>
      {/* Editor Content */}
      <div className="bg-background" style={{ minHeight: min_height }}>
        <EditorContent
          editor={editor_instance}
          className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none p-4"
        />
      </div>
      {/* Status Bar */}
      <div className="flex justify-between items-center p-2 text-xs text-muted-foreground border-t-2 border-border bg-muted/30">
        <div className="flex gap-4">
          <span>
            Characters:
            {editor_instance.storage.characterCount?.characters() || 0}
          </span>
          <span>
            Words: {editor_instance.storage.characterCount?.words() || 0}
          </span>
          {editor_instance.isActive("table") && (
            <span className="text-blue-600 font-medium">📊 Table Mode</span>
          )}
          {!editable && (
            <span className="text-orange-600 font-medium">👁️ Read Only</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span>Tip: Ctrl+B untuk bold, Ctrl+I untuk italic</span>
          <span className="text-green-600">🚀 Gen Z Editor Ready!</span>
        </div>
      </div>
    </div>
  );
};

export default Tiptap;
