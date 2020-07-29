const chroma = require("chroma-js");
function createTheme(palette, variant) {
  const vary = (light, dark) => variant === 'light' ? light : dark;
  const invert = (c) => chroma(c).hsl().lightness(100 - chroma(c).lightness()).hex();

  var workbenchForeground = vary(palette.shade1, palette.shade2);
  var editorForeground = vary(palette.shade0, palette.shade2);

  return {
    colors: {
      focusBorder: vary(palette.accent1, chroma(palette.accent1).brighten().hex()),
      foreground: vary(palette.shade2, palette.shade2),
      descriptionForeground: palette.shade3,
      errorForeground: chroma(palette.red).darken(2).hex(),

      "textLink.foreground": vary(chroma(palette.accent1).darken(1).hex(), chroma(palette.accent1).darken(2).hex()),
      "textLink.activeForeground": vary(chroma(palette.accent1).darken(2).hex(), chroma(palette.accent1).darken(3).hex()),
      "textBlockQuote.background": palette.shade7,
      "textBlockQuote.border": palette.shade5,
      "textCodeBlock.background": palette.createThemeshade6,
      "textPreformat.foreground": palette.shade2,
      "textSeparator.foreground": palette.shade5,

      "button.background": vary(chroma(palette.accent0).darken(1).hex(), chroma(palette.accent0).brighten(2).hex()),
      "button.foreground": vary(palette.shade7, chroma(palette.accent0).darken(4).hex()),
      "button.hoverBackground": vary(chroma(palette.accent0).brighten().hex(), chroma(palette.accent0).brighten(1).hex()),

      "checkbox.background": vary(palette.shade7, palette.shade5),
      "checkbox.border": vary(palette.shade5, palette.shade7),

      "dropdown.background": vary(palette.shade7, palette.shade6),
      "dropdown.border": vary(palette.shade5, palette.shade7),
      "dropdown.foreground": workbenchForeground,
      "dropdown.listBackground": palette.shade7,

      "input.background": vary(palette.shade7, palette.shade6),
      "input.border": vary(palette.shade5, palette.shade7),
      "input.foreground": workbenchForeground,
      "input.placeholderForeground": vary(palette.shade4, palette.shade3),

      "badge.foreground": vary(chroma(palette.accent1).darken(2).hex(), chroma(palette.accent1).darken(3).hex()),
      "badge.background": vary(chroma(palette.accent1).brighten(3).hex(), chroma(palette.accent1).brighten(2).hex()),

      "progressBar.background": vary(palette.accent1, palette.accent1),

      "titleBar.activeForeground": workbenchForeground,
      "titleBar.activeBackground": palette.shade7,
      "titleBar.inactiveForeground": palette.shade3,
      "titleBar.inactiveBackground": vary(palette.shade6, chroma(palette.shade0).darken().hex()), // #1f2428
      "titleBar.border": vary(palette.shade5, palette.shade7),

      "activityBar.foreground": workbenchForeground,
      "activityBar.inactiveForeground": palette.shade4,
      "activityBar.background": vary(palette.shade7, palette.shade0),
      "activityBarBadge.foreground": vary(palette.shade7, palette.black),
      "activityBarBadge.background": palette.accent1,
      "activityBar.activeBorder": chroma(palette.accent2).brighten().hex(),
      "activityBar.border": vary(palette.shade5, palette.shade7),

      "sideBar.foreground": palette.shade2,
      "sideBar.background": vary(palette.shade6, chroma(palette.shade0).darken().hex()),
      "sideBar.border": vary(palette.shade5, palette.shade7),
      "sideBarTitle.foreground": workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": vary(palette.shade6, chroma(palette.shade0).darken().hex()),
      "sideBarSectionHeader.border": vary(palette.shade5, palette.shade7),

      "list.hoverForeground": workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground": workbenchForeground,
      "list.hoverBackground": vary(palette.shade6, palette.shade0),
      "list.inactiveSelectionBackground": vary(palette.shade5, palette.shade0),
      "list.activeSelectionBackground": vary(palette.shade4, palette.shade1),
      "list.inactiveFocusBackground": vary(chroma(palette.accent1).brighten(3).hex(), chroma(palette.shade0).darken().hex()),
      "list.focusBackground": vary(chroma(palette.accent1).brighten(4).hex(), chroma(palette.accent1).brighten(2).hex()),

      "tree.indentGuidesStroke": vary(palette.shade5, palette.shade6),

      "notificationCenterHeader.foreground": palette.shade3,
      "notificationCenterHeader.background": vary(palette.shade5, palette.shade7),
      "notifications.foreground": workbenchForeground,
      "notifications.background": vary(palette.shade7, palette.shade6),
      "notifications.border": vary(palette.shade5, palette.shade7),
      "notificationsErrorIcon.foreground": chroma(palette.red).darken(1).hex(),
      "notificationsWarningIcon.foreground": chroma(palette.orange).darken(2).hex(),
      "notificationsInfoIcon.foreground": chroma(palette.accent1).darken(2).hex(),

      "pickerGroup.border": palette.shade5,
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background": palette.shade7,
      "quickInput.foreground": workbenchForeground,

      "statusBar.foreground": palette.shade2,
      "statusBar.background": palette.shade7, 
      "statusBar.border": vary(palette.shade5, palette.shade7),
      "statusBar.noFolderBackground": palette.shade7,
      "statusBar.debuggingBackground": vary(palette.accent2, invert(palette.accent2)),
      "statusBar.debuggingForeground": vary(palette.shade7, palette.black),

      "editorGroupHeader.tabsBackground": vary(palette.shade6, chroma(palette.shade0).darken().hex()),
      "editorGroupHeader.tabsBorder": vary(palette.shade5, palette.shade7),
      "editorGroup.border": vary(palette.shade5, palette.shade7),

      "tab.activeForeground": workbenchForeground,
      "tab.inactiveForeground": palette.shade3,
      "tab.inactiveBackground": vary(palette.shade6, chroma(palette.shade0).darken().hex()),
      "tab.activeBackground": palette.shade7,
      "tab.hoverBackground": palette.shade7,
      "tab.unfocusedHoverBackground": palette.shade7,
      "tab.border": vary(palette.shade5, palette.shade7),
      "tab.unfocusedActiveBorderTop": vary(palette.shade5, palette.shade7),
      "tab.activeBorder": palette.shade7,
      "tab.unfocusedActiveBorder": palette.shade7,
      "tab.activeBorderTop": vary(palette.accent2, chroma(palette.accent2).brighten().hex()),

      "breadcrumb.foreground": palette.shade3,
      "breadcrumb.focusForeground": workbenchForeground,
      "breadcrumb.activeSelectionForeground": palette.shade2,
      "breadcrumbPicker.background": vary(palette.shade7, palette.shade0),

      "editor.foreground": editorForeground,
      "editor.background": palette.shade7,
      "editorWidget.background": palette.shade6,
      "editor.foldBackground": palette.shade7,
      "editor.lineHighlightBackground": palette.shade6,
      "editorLineNumber.foreground": palette.shade5,
      "editorLineNumber.activeForeground": editorForeground,
      "editorIndentGuide.background": palette.shade6,
      "editorIndentGuide.activeBackground": palette.shade5,
      "editorWhitespace.foreground": palette.shade5,
      "editorCursor.foreground": chroma(palette.accent1).darken(3).hex(),
      "editor.findMatchBackground": palette.yellow,
      "editor.findMatchHighlightBackground": chroma(palette.yellow).alpha(.4).hex(),
      "editor.inactiveSelectionBackground": chroma(palette.accent1).darken(1).alpha(.1).hex(),
      "editor.selectionBackground": chroma(palette.accent1).darken(1).alpha(.2).hex(),
      "editor.selectionHighlightBackground": chroma(palette.accent0).alpha(.3).hex(),
      "editor.selectionHighlightBorder": chroma(palette.accent0).alpha(0).hex(),
      "editor.wordHighlightBackground": chroma(palette.accent0).alpha(0).hex(),
      "editor.wordHighlightStrongBackground": chroma(palette.accent0).alpha(0).hex(),
      "editor.wordHighlightBorder": chroma(palette.accent0).darken(2).alpha(.6).hex(),
      "editor.wordHighlightStrongBorder": chroma(palette.accent0).darken(2).alpha(.3).hex(),
      "editorBracketMatch.background": chroma(palette.accent0).alpha(.3).hex(),
      "editorBracketMatch.border": chroma(palette.accent0).alpha(0).hex(),
      "editorGutter.modifiedBackground": palette.blue,
      "editorGutter.addedBackground": chroma(palette.green).darken(1).hex(),
      "editorGutter.deletedBackground": chroma(palette.red).darken(1).hex(),
      "diffEditor.insertedTextBackground": chroma(palette.green).alpha(.2).hex(),
      "diffEditor.removedTextBackground": chroma(palette.red).darken(1).alpha(.25).hex(),
      "scrollbar.shadow": palette.shade6,
      "scrollbarSlider.background": palette.shade5,
      "scrollbarSlider.hoverBackground": palette.shade5,
      "scrollbarSlider.activeBackground": palette.shade5,
      "editorOverviewRuler.border": palette.shade7,
      "panel.background": palette.shade6,
      "panel.border": palette.shade5,
      "panelTitle.activeBorder": chroma(palette.accent2).darken(2).hex(),
      "panelTitle.activeForeground": workbenchForeground,
      "panelTitle.inactiveForeground": palette.shade3,
      "panelInput.border": palette.shade5,
      "terminal.foreground": palette.shade2,
      "gitDecoration.addedResourceForeground": chroma(palette.green).darken(1).hex(),
      "gitDecoration.modifiedResourceForeground": chroma(palette.blue).darken(2).hex(),
      "gitDecoration.deletedResourceForeground": chroma(palette.red).darken(1).hex(),
      "gitDecoration.untrackedResourceForeground": chroma(palette.green).darken(1).hex(),
      "gitDecoration.ignoredResourceForeground": palette.shade4,
      "gitDecoration.conflictingResourceForeground": chroma(palette.orange).darken(2).hex(),
      "gitDecoration.submoduleResourceForeground": palette.shade4,
      "debugToolBar.background": palette.shade7,
      "editor.stackFrameHighlightBackground": chroma(palette.yellow).brighten(3).hex(),
      "editor.focusedStackFrameHighlightBackground": chroma(palette.yellow).brighten(2).hex(),
      "peekViewEditor.matchHighlightBackground": chroma(palette.yellow).brighten(2).hex(),
      "peekViewResult.matchHighlightBackground": chroma(palette.yellow).brighten(2).hex(),
      "peekViewEditor.background": palette.shade4,
      "peekViewResult.background": palette.shade0,
      "settings.headerForeground": workbenchForeground,
      "settings.modifiedItemIndicator": palette.blue,
      "welcomePage.buttonBackground": palette.shade6,
      "welcomePage.buttonHoverBackground": palette.shade5 // colorPalette.gray[2],
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        settings: {
          foreground: vary(palette.shade3, palette.shade4)
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
        ],
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: [
          "entity",
          "entity.name"
        ],
        settings: {
          foreground: vary(chroma(palette.purple).darken().hex(), chroma(palette.purple).darken(2).hex())
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: chroma(palette.green).darken(2).hex(),
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).darken(2).hex()),
        },
      },
      {
        scope: [
          "storage",
          "storage.type"
        ],
        settings: {
          foreground: vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).darken(2).hex()),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: vary(chroma(palette.blue).darken(4).hex(), chroma(palette.blue).brighten(2).hex()),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: chroma(palette.orange).darken(2).hex(),
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: chroma(palette.red).darken(3).hex(),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: chroma(palette.red).darken(3).hex(),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: chroma(palette.red).darken(3).hex(),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: chroma(palette.red).darken(3).hex(),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).darken(2).hex()),
          foreground: palette.white,
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: chroma(palette.red).darken(3).hex(),
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: chroma(palette.blue).darken(4).hex(),
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: chroma(palette.blue).darken(4).hex(),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: chroma(palette.green).darken(2).hex(),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: chroma(palette.orange).darken(2).hex(),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: chroma(palette.green).darken(2).hex(),
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: chroma(palette.red).brighten(4).hex(),
          foreground: chroma(palette.red).darken(3).hex(),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: chroma(palette.green).brighten(4).hex(),
          foreground: chroma(palette.green).darken(2).hex(),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: chroma(palette.orange).brighten(3).hex(),
          foreground: chroma(palette.orange).darken(2).hex(),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: palette.shade6,
          background: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: vary(chroma(palette.purple).darken().hex(), chroma(palette.purple).darken(2).hex()),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: chroma(palette.blue).darken(2).hex(),
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: palette.shade2,
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: chroma(palette.red).darken(3).hex(),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: chroma(palette.blue).darken(4).hex(),
          fontStyle: "underline",
        },
      },
    ]
  };
}
module.exports = {
  createTheme
};