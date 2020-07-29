const chroma = require("chroma-js");
function createTheme(palette, variant) {
  const vary = (light, dark) => variant === 'light' ? light : dark;
  const invert = (c) => {
    const lightness = chroma(c).get('hsl.l');
    return chroma(c).set('hsl.l', 100 - lightness).hex();
  }

  const shift = (c, h, s, l) => {
    const hue = (chroma(c).get('hsl.h') + h + 360) % 360;
    const saturation = Math.max(0, Math.min(1.0, (chroma(c).get('hsl.s') + s)));
    const lightness = Math.max(0, Math.min(1.0, (chroma(c).get('hsl.l') + l)));
    return chroma.hsl(hue, saturation, lightness).hex();
  }
  
  var workbenchForeground = vary(palette.shade1, palette.shade5);
  var editorForeground = vary(palette.shade0, palette.shade5);
  var darkWorkbenchBorder = palette.black;

  return {
    colors: {
      focusBorder: vary(palette.accent1, chroma(palette.blue).darken(1).hex()),
      foreground: vary(palette.shade2, palette.shade5),
      descriptionForeground: vary(palette.shade3, palette.shade4),
      errorForeground: vary(chroma(palette.red).darken(2).hex(), chroma(palette.red).brighten(2).hex()),

      "textLink.foreground": vary(chroma(palette.accent1).darken(1).hex(), chroma(palette.blue).brighten(2).hex()),
      "textLink.activeForeground": vary(chroma(palette.accent1).darken(2).hex(), chroma(palette.blue).brighten(3).hex()),
      "textBlockQuote.background": vary(palette.shade7, palette.shade0),
      "textBlockQuote.border": vary(palette.shade5, palette.shade2),
      "textCodeBlock.background": vary(palette.shade6, palette.shade1),
      "textPreformat.foreground": vary(palette.shade2, palette.shade5),
      "textSeparator.foreground": vary(palette.shade5, palette.shade2),

      "button.background": vary(chroma(palette.accent0).darken(1).hex(), chroma(palette.green).darken(2).hex()),
      "button.foreground": vary(palette.shade7, chroma(palette.green).brighten(4).hex()),
      "button.hoverBackground": vary(chroma(palette.accent0).brighten().hex(), chroma(palette.green).darken(1).hex()),

      "checkbox.background": vary(palette.shade7, palette.shade2),
      "checkbox.border": vary(palette.shade5, darkWorkbenchBorder),

      "dropdown.background": vary(palette.shade7, palette.shade1),
      "dropdown.border": vary(palette.shade5, darkWorkbenchBorder),
      "dropdown.foreground": workbenchForeground,
      "dropdown.listBackground": vary(palette.shade7, palette.shade0),

      "input.background": vary(palette.shade7, palette.shade1),
      "input.border": vary(palette.shade5, darkWorkbenchBorder),
      "input.foreground": workbenchForeground,
      "input.placeholderForeground": vary(palette.shade4, palette.shade4),

      "badge.foreground": vary(chroma(palette.accent1).darken(2).hex(), chroma(palette.accent1).brighten(3).hex()),
      "badge.background": vary(chroma(palette.accent1).brighten(3).hex(), chroma(palette.accent1).darken(2).hex()),

      "progressBar.background": vary(palette.accent1, palette.accent1),

      "titleBar.activeForeground": workbenchForeground,
      "titleBar.activeBackground": vary(palette.shade7, palette.shade0),
      "titleBar.inactiveForeground": vary(palette.shade3, palette.shade4),
      "titleBar.inactiveBackground": vary(palette.shade6, chroma(palette.shade0).darken(.1).hex()),
      "titleBar.border": vary(palette.shade5, darkWorkbenchBorder),

      "activityBar.foreground": workbenchForeground,
      "activityBar.inactiveForeground": vary(palette.shade4, palette.shade3),
      "activityBar.background": vary(palette.shade7, palette.shade0),
      "activityBarBadge.foreground": vary(palette.shade7, palette.shade7),
      "activityBarBadge.background": vary(palette.accent1, palette.accent1),
      "activityBar.activeBorder": shift(palette.accent2, -16, -.04, .11),
      "activityBar.border": vary(palette.shade5, darkWorkbenchBorder),

      "sideBar.foreground": vary(palette.shade2, palette.shade5),
      "sideBar.background": vary(palette.shade6, chroma(palette.shade0).darken(.1).hex()),
      "sideBar.border": vary(palette.shade5, darkWorkbenchBorder),
      "sideBarTitle.foreground": workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": vary(palette.shade6, chroma(palette.shade0).darken(.1).hex()),
      "sideBarSectionHeader.border": vary(palette.shade5, darkWorkbenchBorder),

      "list.hoverForeground": workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground": workbenchForeground,
      "list.hoverBackground": vary(palette.shade6, palette.shade0),
      "list.inactiveSelectionBackground": vary(palette.shade5, palette.shade0),
      "list.activeSelectionBackground": vary(palette.shade4, palette.shade1),
      "list.inactiveFocusBackground": vary(chroma(palette.accent1).brighten(3).hex(), chroma(palette.shade0).darken(.1).hex()),
      "list.focusBackground": vary(chroma(palette.accent1).brighten(4).hex(), chroma(palette.accent1).darken(2).hex()),

      "tree.indentGuidesStroke": vary(palette.shade5, palette.shade1),

      "notificationCenterHeader.foreground": vary(palette.shade3, palette.shade4),
      "notificationCenterHeader.background": vary(palette.shade5, palette.shade0),
      "notifications.foreground": workbenchForeground,
      "notifications.background": vary(palette.shade7, palette.shade1),
      "notifications.border": vary(palette.shade5, darkWorkbenchBorder),
      "notificationsErrorIcon.foreground": vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).brighten(1).hex()),
      "notificationsWarningIcon.foreground": vary(chroma(palette.orange).darken(2).hex(), chroma(palette.orange).brighten(2).hex()),
      "notificationsInfoIcon.foreground": vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten(2).hex()),

      "pickerGroup.border": vary(palette.shade5, palette.shade2),
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background": vary(palette.shade7, palette.shade0),
      "quickInput.foreground": workbenchForeground,

      "statusBar.foreground": vary(palette.shade2, palette.shade5),
      "statusBar.background": vary(palette.shade7, palette.shade0),
      "statusBar.border": vary(palette.shade5, darkWorkbenchBorder),
      "statusBar.noFolderBackground": vary(palette.shade7, palette.shade0),
      "statusBar.debuggingBackground": invert(palette.accent2),
      "statusBar.debuggingForeground": vary(palette.shade7, palette.shade7),

      "editorGroupHeader.tabsBackground": vary(palette.shade6, chroma(palette.shade0).darken(.1).hex()),
      "editorGroupHeader.tabsBorder": vary(palette.shade5, palette.shade0),
      "editorGroup.border": vary(palette.shade5, darkWorkbenchBorder),

      "tab.activeForeground": workbenchForeground,
      "tab.inactiveForeground": vary(palette.shade3, palette.shade4),
      "tab.inactiveBackground": vary(palette.shade6, chroma(palette.shade0).darken(.1).hex()),
      "tab.activeBackground": vary(palette.shade7, palette.shade0),
      "tab.hoverBackground": vary(palette.shade7, palette.shade0),
      "tab.unfocusedHoverBackground": vary(palette.shade7, palette.shade0),
      "tab.border": vary(palette.shade5, darkWorkbenchBorder),
      "tab.unfocusedActiveBorderTop": vary(palette.shade5, palette.shade0),
      "tab.activeBorder": vary(palette.shade7, palette.shade0),
      "tab.unfocusedActiveBorder": vary(palette.shade7, palette.shade0),
      "tab.activeBorderTop": shift(palette.accent2, -16, -.04, .11),

      "breadcrumb.foreground": vary(palette.shade3, palette.shade4),
      "breadcrumb.focusForeground": workbenchForeground,
      "breadcrumb.activeSelectionForeground": vary(palette.shade2, palette.shade5),
      "breadcrumbPicker.background": vary(palette.shade7, palette.shade0),

      "editor.foreground": editorForeground,
      "editor.background": vary(palette.shade7, palette.shade0),
      "editorWidget.background": vary(palette.shade6, chroma(palette.shade0).darken(.1).hex()),
      "editor.foldBackground": vary(palette.shade7, chroma(palette.shade1).darken(1).hex()),
      "editor.lineHighlightBackground": vary(palette.shade6, chroma(palette.shade1).darken(0.5).hex()),
      "editorLineNumber.foreground": vary(palette.shade5, palette.shade2),
      "editorLineNumber.activeForeground": editorForeground,
      "editorIndentGuide.background": vary(palette.shade6, palette.shade1),
      "editorIndentGuide.activeBackground": vary(palette.shade5, palette.shade2),
      "editorWhitespace.foreground": vary(palette.shade5, palette.shade2),
      "editorCursor.foreground": vary(chroma(palette.accent1).darken(3).hex(), chroma(palette.blue).brighten(3).hex()),

      "editor.findMatchBackground": vary(palette.yellow, chroma(palette.yellow).brighten(1).hex()),
      "editor.findMatchHighlightBackground": vary(chroma(palette.yellow).alpha(.4).hex(), chroma(palette.yellow).alpha(0.3).hex()),
      "editor.inactiveSelectionBackground": vary(chroma(palette.accent1).darken(1).alpha(.1).hex(), chroma(palette.accent1).darken(1.5).alpha(.1).hex()),
      "editor.selectionBackground": vary(chroma(palette.accent1).darken(1).alpha(.2).hex(), chroma(palette.accent1).darken(2).alpha(.2).hex()),
      "editor.selectionHighlightBackground": vary(chroma(palette.accent0).alpha(.3).hex(), chroma(palette.accent3).brighten(2).hex()),
      "editor.selectionHighlightBorder": vary(chroma(palette.accent0).alpha(0).hex(), chroma(palette.accent3).alpha(0).hex()),
      "editor.wordHighlightBackground": vary(chroma(palette.accent0).alpha(0).hex(), chroma(palette.accent3).alpha(0).hex()),
      "editor.wordHighlightStrongBackground": vary(chroma(palette.accent0).alpha(0).hex(), chroma(palette.accent3).alpha(0).hex()),
      "editor.wordHighlightBorder": vary(chroma(palette.accent0).darken(2).alpha(.6).hex(),chroma(palette.accent3).alpha(.6).hex()),
      "editor.wordHighlightStrongBorder": vary(chroma(palette.accent0).darken(2).alpha(.3).hex(),chroma(palette.accent3).alpha(.5).hex()),
      "editorBracketMatch.background": vary(chroma(palette.accent0).alpha(.3).hex(),chroma(palette.accent3).alpha(.4).hex()),
      "editorBracketMatch.border": vary(chroma(palette.accent0).alpha(0).hex(),chroma(palette.accent3).alpha(0).hex()),


      "editorGutter.modifiedBackground": vary(palette.blue, chroma(palette.blue).brighten(1).hex()),
      "editorGutter.addedBackground": vary(chroma(palette.green).darken(1).hex(), palette.green),
      "editorGutter.deletedBackground": vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).brighten(1).hex()),

      "diffEditor.insertedTextBackground": vary(chroma(palette.green).alpha(.2).hex(), chroma(palette.green).alpha(.3).hex()),
      "diffEditor.removedTextBackground": vary(chroma(palette.red).darken(1).alpha(.25).hex(),chroma(palette.red).darken(1).alpha(.4).hex()),

      "scrollbar.shadow": vary(palette.shade6, palette.shade1),
      "scrollbarSlider.background": vary(chroma(palette.shade5).alpha(0.2).hex(), chroma(palette.shade4).alpha(0.2).hex()),
      "scrollbarSlider.hoverBackground": vary(chroma(palette.shade5).alpha(0.25).hex(), chroma(palette.shade4).alpha(0.25).hex()),
      "scrollbarSlider.activeBackground": vary(chroma(palette.shade5).alpha(0.6).hex(), chroma(palette.shade4).alpha(0.6).hex()),
      "editorOverviewRuler.border": vary(palette.shade7, darkWorkbenchBorder),

      "panel.background": vary(palette.shade6, chroma(palette.shade0).darken(.1).hex()),
      "panel.border": vary(palette.shade5, darkWorkbenchBorder),
      "panelTitle.activeBorder": shift(palette.accent2, -16, -.04, .11),
      "panelTitle.activeForeground": workbenchForeground,
      "panelTitle.inactiveForeground": vary(palette.shade3, palette.shade4),
      "panelInput.border": vary(palette.shade5, palette.shade1),

      "terminal.foreground": vary(palette.shade2, palette.shade5),

      "gitDecoration.addedResourceForeground": vary(chroma(palette.green).darken(1).hex(), chroma(palette.green).brighten(1).hex()),
      "gitDecoration.modifiedResourceForeground": vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten(2).hex()),
      "gitDecoration.deletedResourceForeground": vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).brighten(1).hex()),
      "gitDecoration.untrackedResourceForeground": vary(chroma(palette.green).darken(1).hex(), chroma(palette.green).brighten(1).hex()),
      "gitDecoration.ignoredResourceForeground": vary(palette.shade4, palette.shade3),
      "gitDecoration.conflictingResourceForeground": vary(chroma(palette.orange).darken(2).hex(), chroma(palette.orange).brighten(2).hex()),
      "gitDecoration.submoduleResourceForeground": vary(palette.shade4, palette.shade3),

      "debugToolBar.background": vary(palette.shade7, chroma(palette.shade0).darken(3).hex()),
      "editor.stackFrameHighlightBackground": vary(chroma(palette.yellow).brighten(3).hex(),chroma(palette.yellow).darken(3).hex()),
      "editor.focusedStackFrameHighlightBackground": vary(chroma(palette.yellow).brighten(2).hex(),chroma(palette.yellow).darken(2).hex()),

      "peekViewEditor.matchHighlightBackground": vary(undefined, chroma(palette.yellow).brighten(2).hex()),
      "peekViewResult.matchHighlightBackground": vary(undefined, chroma(palette.yellow).brighten(2).hex()),
      "peekViewEditor.background": vary(undefined, chroma(palette.shade0).alpha(0.6).hex()),
      "peekViewResult.background": vary(undefined, palette.shade0),

      "settings.headerForeground": workbenchForeground,
      "settings.modifiedItemIndicator": vary(palette.blue, palette.blue),
      "welcomePage.buttonBackground": vary(palette.shade6, palette.shade1),
      "welcomePage.buttonHoverBackground": vary(palette.shade5, palette.shade2), // colorPalette.gray[2],
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
          foreground: vary(palette.shade3, palette.shade3),
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
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: [
          "entity",
          "entity.name"
        ],
        settings: {
          foreground: vary(chroma(palette.purple).darken().hex(), chroma(palette.purple).brighten().hex())
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
          foreground: vary(chroma(palette.green).darken(2).hex(), chroma(palette.green).brighten().hex()),
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).brighten().hex())
        },
      },
      {
        scope: [
          "storage",
          "storage.type"
        ],
        settings: {
          foreground: vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).brighten().hex()),
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
          foreground: vary(chroma(palette.blue).darken(4).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: vary(chroma(palette.orange).darken(2).hex(), chroma(palette.orange).brighten().hex()),
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
          foreground: vary(chroma(palette.red).darken(3).hex(), chroma(palette.red).brighten(1.5).hex()),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: vary(chroma(palette.red).darken(3).hex(), chroma(palette.red).brighten(1.5).hex()),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: vary(chroma(palette.red).darken(3).hex(), chroma(palette.red).brighten(1.5).hex()),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: vary(chroma(palette.red).darken(3).hex(), chroma(palette.red).brighten(1.5).hex()),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: vary(chroma(palette.red).darken(1).hex(), chroma(palette.red).brighten().hex()),
          foreground: palette.white,
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: vary(chroma(palette.red).darken(3).hex(), chroma(palette.red).brighten(1.5).hex()),
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
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: vary(chroma(palette.blue).darken(4).hex(), chroma(palette.blue).brighten(2).hex()),
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
          foreground: vary(chroma(palette.blue).darken(4).hex(), chroma(palette.blue).brighten(2).hex()),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: vary(chroma(palette.green).darken(2).hex(), chroma(palette.green).brighten().hex()),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: vary(chroma(palette.orange).darken(2).hex(), chroma(palette.orange).brighten().hex()),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: vary(chroma(palette.green).darken(2).hex(), chroma(palette.green).brighten().hex()),
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
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: vary(chroma(palette.red).brighten(4).hex(), chroma(palette.red).darken(4).hex()),
          foreground: vary(chroma(palette.red).darken(3).hex(), chroma(palette.red).brighten(1.5).hex()),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: vary(chroma(palette.green).brighten(4).hex(), chroma(palette.green).darken(4).hex()),
          foreground: vary(chroma(palette.green).darken(2).hex(), chroma(palette.green).brighten().hex()),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: vary(chroma(palette.orange).brighten(3).hex(), chroma(palette.orange).darken(3).hex()),
          foreground: vary(chroma(palette.orange).darken(2).hex(), chroma(palette.orange).brighten().hex()),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: vary(palette.shade6, palette.shade1),
          background: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: vary(chroma(palette.purple).darken().hex(), chroma(palette.purple).brighten().hex()),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: vary(chroma(palette.blue).darken(2).hex(), chroma(palette.blue).brighten().hex()),
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
          foreground: vary(palette.shade2, palette.shade5),
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: vary(chroma(palette.red).darken(3).hex(), chroma(palette.red).brighten(1.5).hex()),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: vary(chroma(palette.blue).darken(4).hex(), chroma(palette.blue).brighten(2).hex()),
          fontStyle: "underline",
        },
      },
    ]
  };
}
module.exports = {
  createTheme
};