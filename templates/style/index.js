const chroma = require("chroma-js");
function createTheme(palette) {
    var workbenchForeground = palette.shade1;
    var editorForeground = palette.shade0;
    return {
        colors: {
            focusBorder: palette.accent1,
            foreground: palette.shade2,
            descriptionForeground: palette.shade3,
            errorForeground: chroma(palette.red).darken(2).hex(),
            "textLink.foreground": chroma(palette.accent1).darken(1).hex(),
            "textLink.activeForeground": chroma(palette.accent1).darken(2).hex(),
            "textBlockQuote.background": palette.shade7,
            "textBlockQuote.border": palette.shade5,
            "textCodeBlock.background": palette.createThemeshade6,
            "textPreformat.foreground": palette.shade2,
            "textSeparator.foreground": palette.shade5,
            "button.background": chroma(palette.accent0).darken(1).hex(),
            "button.foreground": palette.shade7,
            "button.hoverBackground": chroma(palette.accent0).brighten().hex(),
            "checkbox.background": palette.shade7,
            "checkbox.border": palette.shade5,
            "dropdown.background": palette.shade7,
            "dropdown.border": palette.shade5,
            "dropdown.foreground": workbenchForeground,
            "dropdown.listBackground": palette.shade7,
            "input.background": palette.shade7,
            "input.border": palette.shade5,
            "input.foreground": workbenchForeground,
            "input.placeholderForeground": palette.shade4,
            "badge.foreground": chroma(palette.accent1).darken(2).hex(),
            "badge.background": chroma(palette.accent1).darken(3).hex(),
            "progressBar.background": palette.accent1,
            "titleBar.activeForeground": workbenchForeground,
            "titleBar.activeBackground": palette.shade7,
            "titleBar.inactiveForeground": palette.shade3,
            "titleBar.inactiveBackground": palette.shade6,
            "titleBar.border": palette.shade5,
            "activityBar.foreground": workbenchForeground,
            "activityBar.inactiveForeground": palette.shade4,
            "activityBar.background": palette.shade7,
            "activityBarBadge.foreground": palette.shade7,
            "activityBarBadge.background": palette.accent1,
            "activityBar.activeBorder": chroma(palette.accent2).brighten().hex(),
            "activityBar.border": palette.shade5,
            "sideBar.foreground": palette.shade2,
            "sideBar.background": palette.shade6,
            "sideBar.border": palette.shade5,
            "sideBarTitle.foreground": workbenchForeground,
            "sideBarSectionHeader.foreground": workbenchForeground,
            "sideBarSectionHeader.background": palette.shade6,
            "sideBarSectionHeader.border": palette.shade5,
            "list.hoverForeground": workbenchForeground,
            "list.inactiveSelectionForeground": workbenchForeground,
            "list.activeSelectionForeground": workbenchForeground,
            "list.hoverBackground": palette.shade6,
            "list.inactiveSelectionBackground": palette.shade5,
            "list.activeSelectionBackground": palette.shade4,
            "list.inactiveFocusBackground": chroma(palette.accent1).brighten(3).hex(),
            "list.focusBackground": chroma(palette.accent1).brighten(4).hex(),
            "tree.indentGuidesStroke": palette.shade5,
            "notificationCenterHeader.foreground": palette.shade3,
            "notificationCenterHeader.background": palette.shade5,
            "notifications.foreground": workbenchForeground,
            "notifications.background": palette.shade7,
            "notifications.border": palette.shade5,
            "notificationsErrorIcon.foreground": chroma(palette.red).darken(1).hex(),
            "notificationsWarningIcon.foreground": chroma(palette.orange).darken(2).hex(),
            "notificationsInfoIcon.foreground": chroma(palette.accent1).darken(2).hex(),
            "pickerGroup.border": palette.shade5,
            "pickerGroup.foreground": workbenchForeground,
            "quickInput.background": palette.shade7,
            "quickInput.foreground": workbenchForeground,
            "statusBar.foreground": palette.shade2,
            "statusBar.background": palette.shade7,
            "statusBar.border": palette.shade5,
            "statusBar.noFolderBackground": palette.shade7,
            "statusBar.debuggingBackground": palette.accent2,
            "statusBar.debuggingForeground": palette.shade7,
            "editorGroupHeader.tabsBackground": palette.shade6,
            "editorGroupHeader.tabsBorder": palette.shade5,
            "editorGroup.border": palette.shade5,
            "tab.activeForeground": workbenchForeground,
            "tab.inactiveForeground": palette.shade3,
            "tab.inactiveBackground": palette.shade6,
            "tab.activeBackground": palette.shade7,
            "tab.hoverBackground": palette.shade7,
            "tab.unfocusedHoverBackground": palette.shade7,
            "tab.border": palette.shade5,
            "tab.unfocusedActiveBorderTop": palette.shade5,
            "tab.activeBorder": palette.shade7,
            "tab.unfocusedActiveBorder": palette.shade7,
            "tab.activeBorderTop": palette.accent2,
            "breadcrumb.foreground": palette.shade3,
            "breadcrumb.focusForeground": workbenchForeground,
            "breadcrumb.activeSelectionForeground": palette.shade2,
            "breadcrumbPicker.background": palette.shade7,
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
              foreground: palette.shade3,
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
              foreground: chroma(palette.purple).darken().hex(),
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
              foreground: chroma(palette.red).darken(1).hex(),
            },
          },
          {
            scope: [
                "storage",
                "storage.type"
            ],
            settings: {
              foreground: chroma(palette.red).darken(1).hex(),
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
              foreground: chroma(palette.blue).dark(4).hex(),
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
              background: chroma(palette.red).darken(1).hex(),
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
              foreground: chroma(palette.purple).darken().hex(),
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
        ],
      };
    };
}
module.exports = {
  createTheme
};