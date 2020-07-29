const chroma = require("chroma-js");
function createTheme(palette, variant) {
  const vary = (light, dark) => variant === 'light' ? light : dark;
  const invert = (c) => {
    const lightness = c.get('hsl.l');
    return c.set('hsl.l', 100 - lightness);
  }

  const shift = (c, h, s, l) => {
    const hue = (c.get('hsl.h') + h + 360) % 360;
    const saturation = Math.max(0, Math.min(1.0, (c.get('hsl.s') + s)));
    const lightness = Math.max(0, Math.min(1.0, (c.get('hsl.l') + l)));
    return chroma.hsl(hue, saturation, lightness);
  }
  
  var workbenchForeground = vary(palette.shade1, palette.shade5);
  var editorForeground = vary(palette.shade0, palette.shade5);
  var darkWorkbenchBorder = palette.black;

  return {
    colors: {
      focusBorder: vary(palette.accent1, palette.blue.darken(1)),
      foreground: vary(palette.shade2, palette.shade5),
      descriptionForeground: vary(palette.shade3, palette.shade4),
      errorForeground: vary(palette.red.darken(2), palette.red.brighten(2)),

      "textLink.foreground": vary(palette.accent1.darken(1), palette.blue.brighten(2)),
      "textLink.activeForeground": vary(palette.accent1.darken(2), palette.blue.brighten(3)),
      "textBlockQuote.background": vary(palette.shade7, palette.shade0),
      "textBlockQuote.border": vary(palette.shade5, palette.shade2),
      "textCodeBlock.background": vary(palette.shade6, palette.shade1.darken(.5)),
      "textPreformat.foreground": vary(palette.shade2, palette.shade5),
      "textSeparator.foreground": vary(palette.shade5, palette.shade2),

      "button.background": vary(palette.accent0.darken(1), palette.accent0.darken(2)),
      "button.foreground": vary(palette.shade7, palette.accent0.brighten(4)),
      "button.hoverBackground": vary(palette.accent0.brighten(), palette.accent0.darken(1.9)),

      "checkbox.background": vary(palette.shade7, palette.shade2),
      "checkbox.border": vary(palette.shade5, darkWorkbenchBorder),

      "dropdown.background": vary(palette.shade7, palette.shade1.darken(.5)),
      "dropdown.border": vary(palette.shade5, darkWorkbenchBorder),
      "dropdown.foreground": workbenchForeground,
      "dropdown.listBackground": vary(palette.shade7, palette.shade0),

      "input.background": vary(palette.shade7, palette.shade1.darken(.5)),
      "input.border": vary(palette.shade5, darkWorkbenchBorder),
      "input.foreground": workbenchForeground,
      "input.placeholderForeground": vary(palette.shade4, palette.shade4),

      "badge.foreground": vary(palette.accent1.darken(2), palette.accent1.brighten(3)),
      "badge.background": vary(palette.accent1.brighten(3), palette.accent1.darken(2)),

      "progressBar.background": vary(palette.accent1, palette.accent1),

      "titleBar.activeForeground": workbenchForeground,
      "titleBar.activeBackground": vary(palette.shade7, palette.shade0),
      "titleBar.inactiveForeground": vary(palette.shade3, palette.shade4),
      "titleBar.inactiveBackground": vary(palette.shade6, palette.shade0.darken(.1)),
      "titleBar.border": vary(palette.shade5, darkWorkbenchBorder),

      "activityBar.foreground": workbenchForeground,
      "activityBar.inactiveForeground": vary(palette.shade4, palette.shade3),
      "activityBar.background": vary(palette.shade7, palette.shade0),
      "activityBarBadge.foreground": vary(palette.shade7, palette.shade7),
      "activityBarBadge.background": vary(palette.accent1, palette.accent1),
      "activityBar.activeBorder": shift(palette.accent2, -16, -.04, .11),
      "activityBar.border": vary(palette.shade5, darkWorkbenchBorder),

      "sideBar.foreground": vary(palette.shade2, palette.shade5),
      "sideBar.background": vary(palette.shade6, palette.shade0.darken(.1)),
      "sideBar.border": vary(palette.shade5, darkWorkbenchBorder),
      "sideBarTitle.foreground": workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": vary(palette.shade6, palette.shade0.darken(.1)),
      "sideBarSectionHeader.border": vary(palette.shade5, darkWorkbenchBorder),

      "list.hoverForeground": workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground": workbenchForeground,
      "list.hoverBackground": vary(palette.shade6, palette.shade0.brighten(.1)),
      "list.inactiveSelectionBackground": vary(palette.shade5, palette.shade0),
      "list.activeSelectionBackground": vary(palette.shade4, palette.shade1.darken(.5)),
      "list.inactiveFocusBackground": vary(palette.accent1.brighten(3), palette.shade0.darken(.1)),
      "list.focusBackground": vary(palette.accent1.brighten(4), palette.accent1.darken(2)),

      "tree.indentGuidesStroke": vary(palette.shade5, palette.shade1.darken(.5)),

      "notificationCenterHeader.foreground": vary(palette.shade3, palette.shade4),
      "notificationCenterHeader.background": vary(palette.shade5, palette.shade0),
      "notifications.foreground": workbenchForeground,
      "notifications.background": vary(palette.shade7, palette.shade1.darken(.5)),
      "notifications.border": vary(palette.shade5, darkWorkbenchBorder),
      "notificationsErrorIcon.foreground": vary(palette.red.darken(1), palette.red.brighten(1)),
      "notificationsWarningIcon.foreground": vary(palette.orange.darken(2), palette.orange.brighten(2)),
      "notificationsInfoIcon.foreground": vary(palette.blue.darken(2), palette.blue.brighten(2)),

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

      "editorGroupHeader.tabsBackground": vary(palette.shade6, palette.shade0.darken(.1)),
      "editorGroupHeader.tabsBorder": vary(palette.shade5, palette.shade0),
      "editorGroup.border": vary(palette.shade5, darkWorkbenchBorder),

      "tab.activeForeground": workbenchForeground,
      "tab.inactiveForeground": vary(palette.shade3, palette.shade4),
      "tab.inactiveBackground": vary(palette.shade6, palette.shade0.darken(.1)),
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
      "editorWidget.background": vary(palette.shade6, palette.shade0.darken(.1)),
      "editor.foldBackground": vary(palette.shade7, palette.shade1.darken(1)),
      "editor.lineHighlightBackground": vary(palette.shade6, palette.shade1.darken(0.5)),
      "editorLineNumber.foreground": vary(palette.shade5, palette.shade2),
      "editorLineNumber.activeForeground": editorForeground,
      "editorIndentGuide.background": vary(palette.shade6, palette.shade1.darken(.5)),
      "editorIndentGuide.activeBackground": vary(palette.shade5, palette.shade2),
      "editorWhitespace.foreground": vary(palette.shade5, palette.shade2),
      "editorCursor.foreground": vary(palette.accent1.darken(3), palette.blue.brighten(3)),

      "editor.findMatchBackground": vary(palette.yellow, palette.yellow.brighten(1)),
      "editor.findMatchHighlightBackground": vary(palette.yellow.alpha(.4), palette.yellow.alpha(0.3)),
      "editor.inactiveSelectionBackground": vary(palette.accent1.darken(1).alpha(.1), palette.accent1.darken(1.5).alpha(.1)),
      "editor.selectionBackground": vary(palette.accent1.darken(1).alpha(.2), palette.accent1.darken(2).alpha(.2)),
      "editor.selectionHighlightBackground": vary(palette.accent0.alpha(.3), palette.accent3.brighten(2)),
      "editor.selectionHighlightBorder": vary(palette.accent0.alpha(0), palette.accent3.alpha(0)),
      "editor.wordHighlightBackground": vary(palette.accent0.alpha(0), palette.accent3.alpha(0)),
      "editor.wordHighlightStrongBackground": vary(palette.accent0.alpha(0), palette.accent3.alpha(0)),
      "editor.wordHighlightBorder": vary(palette.accent0.darken(2).alpha(.6),palette.accent3.alpha(.6)),
      "editor.wordHighlightStrongBorder": vary(palette.accent0.darken(2).alpha(.3),palette.accent3.alpha(.5)),
      "editorBracketMatch.background": vary(palette.accent0.alpha(.3),palette.accent3.alpha(.4)),
      "editorBracketMatch.border": vary(palette.accent0.alpha(0),palette.accent3.alpha(0)),


      "editorGutter.modifiedBackground": vary(palette.blue, palette.blue.brighten(1)),
      "editorGutter.addedBackground": vary(palette.green.darken(1), palette.green),
      "editorGutter.deletedBackground": vary(palette.red.darken(1), palette.red.brighten(1)),

      "diffEditor.insertedTextBackground": vary(palette.green.alpha(.2), palette.green.alpha(.3)),
      "diffEditor.removedTextBackground": vary(palette.red.darken(1).alpha(.25),palette.red.darken(1).alpha(.4)),

      "scrollbar.shadow": vary(palette.shade6, palette.shade1.darken(.5)),
      "scrollbarSlider.background": vary(palette.shade5.alpha(0.2), palette.shade4.alpha(0.2)),
      "scrollbarSlider.hoverBackground": vary(palette.shade5.alpha(0.25), palette.shade4.alpha(0.25)),
      "scrollbarSlider.activeBackground": vary(palette.shade5.alpha(0.6), palette.shade4.alpha(0.6)),
      "editorOverviewRuler.border": vary(palette.shade7, darkWorkbenchBorder),

      "panel.background": vary(palette.shade6, palette.shade0.darken(.1)),
      "panel.border": vary(palette.shade5, darkWorkbenchBorder),
      "panelTitle.activeBorder": shift(palette.accent2, -16, -.04, .11),
      "panelTitle.activeForeground": workbenchForeground,
      "panelTitle.inactiveForeground": vary(palette.shade3, palette.shade4),
      "panelInput.border": vary(palette.shade5, palette.shade1.darken(.5)),

      "terminal.foreground": vary(palette.shade2, palette.shade5),

      "gitDecoration.addedResourceForeground": vary(palette.green.darken(1), palette.green.brighten(1)),
      "gitDecoration.modifiedResourceForeground": vary(palette.blue.darken(2), palette.blue.brighten(2)),
      "gitDecoration.deletedResourceForeground": vary(palette.red.darken(1), palette.red.brighten(1)),
      "gitDecoration.untrackedResourceForeground": vary(palette.green.darken(1), palette.green.brighten(1)),
      "gitDecoration.ignoredResourceForeground": vary(palette.shade4, palette.shade3),
      "gitDecoration.conflictingResourceForeground": vary(palette.orange.darken(2), palette.orange.brighten(2)),
      "gitDecoration.submoduleResourceForeground": vary(palette.shade4, palette.shade3),

      "debugToolBar.background": vary(palette.shade7, palette.shade0.darken(3)),
      "editor.stackFrameHighlightBackground": vary(palette.yellow.brighten(3),palette.yellow.darken(3)),
      "editor.focusedStackFrameHighlightBackground": vary(palette.yellow.brighten(2),palette.yellow.darken(2)),

      "peekViewEditor.matchHighlightBackground": vary(undefined, palette.yellow.brighten(2)),
      "peekViewResult.matchHighlightBackground": vary(undefined, palette.yellow.brighten(2)),
      "peekViewEditor.background": vary(undefined, palette.shade0.alpha(0.6)),
      "peekViewResult.background": vary(undefined, palette.shade0),

      "settings.headerForeground": workbenchForeground,
      "settings.modifiedItemIndicator": vary(palette.blue, palette.blue),
      "welcomePage.buttonBackground": vary(palette.shade6, palette.shade1.darken(.5)),
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
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: [
          "entity",
          "entity.name"
        ],
        settings: {
          foreground: vary(palette.purple.darken(), palette.purple.brighten())
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
          foreground: vary(palette.green.darken(2), palette.green.brighten()),
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: vary(palette.red.darken(1), palette.red.brighten())
        },
      },
      {
        scope: [
          "storage",
          "storage.type"
        ],
        settings: {
          foreground: vary(palette.red.darken(1), palette.red.brighten()),
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
          foreground: vary(palette.blue.darken(4), palette.blue.brighten()),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: vary(palette.orange.darken(2), palette.orange.brighten()),
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
          foreground: vary(palette.red.darken(3), palette.red.brighten(1.5)),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: vary(palette.red.darken(3), palette.red.brighten(1.5)),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: vary(palette.red.darken(3), palette.red.brighten(1.5)),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: vary(palette.red.darken(3), palette.red.brighten(1.5)),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: vary(palette.red.darken(1), palette.red.brighten()),
          foreground: palette.white,
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: vary(palette.red.darken(3), palette.red.brighten(1.5)),
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
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: vary(palette.blue.darken(4), palette.blue.brighten(2)),
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
          foreground: vary(palette.blue.darken(4), palette.blue.brighten(2)),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: vary(palette.green.darken(2), palette.green.brighten()),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: vary(palette.orange.darken(2), palette.orange.brighten()),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: vary(palette.green.darken(2), palette.green.brighten()),
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
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: vary(palette.red.brighten(4), palette.red.darken(4)),
          foreground: vary(palette.red.darken(3), palette.red.brighten(1.5)),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: vary(palette.green.brighten(4), palette.green.darken(4)),
          foreground: vary(palette.green.darken(2), palette.green.brighten()),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: vary(palette.orange.brighten(3), palette.orange.darken(3)),
          foreground: vary(palette.orange.darken(2), palette.orange.brighten()),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: vary(palette.shade6, palette.shade1.darken(.5)),
          background: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: vary(palette.purple.darken(), palette.purple.brighten()),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: vary(palette.blue.darken(2), palette.blue.brighten()),
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
          foreground: vary(palette.red.darken(3), palette.red.brighten(1.5)),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: vary(palette.blue.darken(4), palette.blue.brighten(2)),
          fontStyle: "underline",
        },
      },
    ]
  };
}
module.exports = {
  createTheme
};