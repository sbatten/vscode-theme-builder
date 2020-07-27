import { IColorPalette, IColorModePalette } from './colorPalette';
import * as chroma from 'chroma-js';

function createTheme(colorPalette: IColorPalette, mode: 'dark' | 'light') {
  const palette: IColorModePalette = colorPalette[mode];

  const workbenchForeground = palette.shade1;
  const editorForeground = palette.shade0

  return {
    focusBorder: palette.accent5,
    foreground: palette.shade2,
    descriptionForeground: palette.shade3,
    errorForeground: chroma(palette.accent0).brighten(2).hex(),

    "textLink.foreground": chroma(palette.accent5).brighten().hex(),
    "textLink.activeForeground": chroma(palette.accent5).brighten(2).hex(),
    "textBlockQuote.background": palette.shade7,
    "textBlockQuote.border": palette.shade5,
    "textCodeBlock.background": palette.shade6,
    "textPreformat.foreground": palette.shade2,
    "textSeparator.foreground": palette.shade5,

    "button.background": chroma(palette.accent3).brighten().hex(),
    "button.foreground": palette.shade7,
    "button.hoverBackground": chroma(palette.accent3).darken().hex(),

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

    "badge.foreground": chroma(palette.accent5).brighten(2),
    "badge.background": pick({ light: colorPalette.blue[1], dark: colorPalette.blue[2] }),

    "progressBar.background": colorPalette.blue[4],

    "titleBar.activeForeground": workbenchForeground,
    "titleBar.activeBackground": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "titleBar.inactiveForeground": colorPalette.gray[5],
    "titleBar.inactiveBackground": pick({ light: colorPalette.gray[1], dark: "#1f2428" }),
    "titleBar.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),

    "activityBar.foreground": workbenchForeground,
    "activityBar.inactiveForeground": colorPalette.gray[4],
    "activityBar.background": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "activityBarBadge.foreground": pick({ light: colorPalette.white, dark: colorPalette.black }),
    "activityBarBadge.background": pick({ light: colorPalette.blue[4], dark: colorPalette.blue[4] }),
    "activityBar.activeBorder": "#f9826c",
    "activityBar.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),

    "sideBar.foreground": colorPalette.gray[6],
    "sideBar.background": pick({ light: colorPalette.gray[1], dark: "#1f2428" }),
    "sideBar.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),
    "sideBarTitle.foreground": workbenchForeground,
    "sideBarSectionHeader.foreground": workbenchForeground,
    "sideBarSectionHeader.background": pick({ light: colorPalette.gray[1], dark: "#1f2428" }),
    "sideBarSectionHeader.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),

    "list.hoverForeground": workbenchForeground,
    "list.inactiveSelectionForeground": workbenchForeground,
    "list.activeSelectionForeground": workbenchForeground,
    "list.hoverBackground": pick({ light: "#ebf0f4", dark: "#282e34" }),
    "list.inactiveSelectionBackground": pick({ light: "#e8eaed", dark: "#282e34" }),
    "list.activeSelectionBackground": pick({ light: "#e2e5e9", dark: "#39414a" }),
    "list.inactiveFocusBackground": pick({ light: colorPalette.blue[1], dark: "#1d2d3e" }),
    "list.focusBackground": pick({ light: "#cce5ff", dark: colorPalette.blue[2] }),

    "tree.indentGuidesStroke": pick({ light: colorPalette.gray[2], dark: colorPalette.gray[1] }),

    "notificationCenterHeader.foreground": colorPalette.gray[5],
    "notificationCenterHeader.background": pick({ light: colorPalette.gray[2], dark: colorPalette.gray[0] }),
    "notifications.foreground": workbenchForeground,
    "notifications.background": pick({ light: colorPalette.gray[0], dark: colorPalette.gray[1] }),
    "notifications.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),
    "notificationsErrorIcon.foreground": colorPalette.red[5],
    "notificationsWarningIcon.foreground": colorPalette.orange[6],
    "notificationsInfoIcon.foreground": colorPalette.blue[6],

    "pickerGroup.border": colorPalette.gray[2],
    "pickerGroup.foreground": workbenchForeground,
    "quickInput.background": colorPalette.gray[0],
    "quickInput.foreground": workbenchForeground,

    "statusBar.foreground": colorPalette.gray[6],
    "statusBar.background": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "statusBar.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),
    "statusBar.noFolderBackground": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "statusBar.debuggingBackground": auto("#f9826c"),
    "statusBar.debuggingForeground": pick({ light: colorPalette.white, dark: colorPalette.black }),

    "editorGroupHeader.tabsBackground": pick({ light: colorPalette.gray[1], dark: "#1f2428" }),
    "editorGroupHeader.tabsBorder": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),
    "editorGroup.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),

    "tab.activeForeground": workbenchForeground,
    "tab.inactiveForeground": colorPalette.gray[5],
    "tab.inactiveBackground": pick({ light: colorPalette.gray[1], dark: "#1f2428" }),
    "tab.activeBackground": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "tab.hoverBackground": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "tab.unfocusedHoverBackground": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "tab.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),
    "tab.unfocusedActiveBorderTop": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),
    "tab.activeBorder": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "tab.unfocusedActiveBorder": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "tab.activeBorderTop": "#f9826c",

    "breadcrumb.foreground": colorPalette.gray[5],
    "breadcrumb.focusForeground": workbenchForeground,
    "breadcrumb.activeSelectionForeground": colorPalette.gray[6],
    "breadcrumbPicker.background": pick({ light: colorPalette.gray[0], dark: "#2b3036" }),

    "editor.foreground": editorForeground,
    "editor.background": pick({ light: colorPalette.white, dark: colorPalette.gray[0] }),
    "editorWidget.background": pick({ light: colorPalette.gray[1], dark: "#1f2428" }),
    "editor.foldBackground": pick({ light: colorPalette.gray[0], dark: "#282e33" }),
    "editor.lineHighlightBackground": pick({ light: colorPalette.gray[1], dark: "#2b3036" }),
    "editorLineNumber.foreground": pick({ light: "#1b1f234d", dark: colorPalette.gray[2] }),
    "editorLineNumber.activeForeground": editorForeground,
    "editorIndentGuide.background": pick({ light: "#eff2f6", dark: colorPalette.gray[1] }),
    "editorIndentGuide.activeBackground": pick({ light: "#d7dbe0", dark: colorPalette.gray[2] }),
    "editorWhitespace.foreground": pick({ light: colorPalette.gray[3], dark: colorPalette.gray[2] }),
    "editorCursor.foreground": colorPalette.blue[7],

    "editor.findMatchBackground": pick({ light: colorPalette.yellow[4], dark: "#ffd33d44" }),
    "editor.findMatchHighlightBackground": pick({ light: "#ffdf5d66", dark: "#ffd33d22" }),
    "editor.inactiveSelectionBackground": pick({ light: "#0366d611", dark: "#3392FF22" }),
    "editor.selectionBackground": pick({ light: "#0366d625", dark: "#3392FF44" }),
    "editor.selectionHighlightBackground": pick({ light: "#34d05840", dark: "#17E5E633" }),
    "editor.selectionHighlightBorder": pick({ light: "#34d05800", dark: "#17E5E600" }),
    "editor.wordHighlightBackground": pick({ light: "#34d05800", dark: "#17E5E600" }),
    "editor.wordHighlightStrongBackground": pick({ light: "#34d05800", dark: "#17E5E600" }),
    "editor.wordHighlightBorder": pick({ light: "#24943e99", dark: "#17E5E699" }),
    "editor.wordHighlightStrongBorder": pick({ light: "#24943e50", dark: "#17E5E666" }),
    "editorBracketMatch.background": pick({ light: "#34d05840", dark: "#17E5E650" }),
    "editorBracketMatch.border": pick({ light: "#34d05800", dark: "#17E5E600" }),

    "editorGutter.modifiedBackground": pick({ light: colorPalette.blue[4], dark: colorPalette.blue[5] }),
    "editorGutter.addedBackground": pick({ light: colorPalette.green[5], dark: colorPalette.green[4] }),
    "editorGutter.deletedBackground": colorPalette.red[5],

    "diffEditor.insertedTextBackground": pick({ light: "#34d05822", dark: "#28a74530" }),
    "diffEditor.removedTextBackground": pick({ light: "#d73a4922", dark: "#d73a4930" }),

    "scrollbar.shadow": pick({ light: "#6a737d33", dark: "#0008" }),
    "scrollbarSlider.background": pick({ light: "#959da533", dark: "#6a737d33" }),
    "scrollbarSlider.hoverBackground": pick({ light: "#959da544", dark: "#6a737d44" }),
    "scrollbarSlider.activeBackground": pick({ light: "#959da588", dark: "#6a737d88" }),
    "editorOverviewRuler.border": colorPalette.white,

    "panel.background": pick({ light: colorPalette.gray[1], dark: "#1f2428" }),
    "panel.border": pick({ light: colorPalette.gray[2], dark: colorPalette.white }),
    "panelTitle.activeBorder": "#f9826c",
    "panelTitle.activeForeground": workbenchForeground,
    "panelTitle.inactiveForeground": colorPalette.gray[5],
    "panelInput.border": pick({ light: colorPalette.gray[2], dark: colorPalette.gray[1] }),

    "terminal.foreground": colorPalette.gray[6],

    "gitDecoration.addedResourceForeground": colorPalette.green[5],
    "gitDecoration.modifiedResourceForeground": colorPalette.blue[6],
    "gitDecoration.deletedResourceForeground": colorPalette.red[5],
    "gitDecoration.untrackedResourceForeground": colorPalette.green[5],
    "gitDecoration.ignoredResourceForeground": colorPalette.gray[4],
    "gitDecoration.conflictingResourceForeground": colorPalette.orange[6],
    "gitDecoration.submoduleResourceForeground": colorPalette.gray[4],

    "debugToolBar.background": pick({ light: colorPalette.white, dark: "#2b3036" }),
    "editor.stackFrameHighlightBackground": pick({ light: colorPalette.yellow[1], dark: "#a707" }),
    "editor.focusedStackFrameHighlightBackground": pick({ light: colorPalette.yellow[2], dark: "#b808" }),

    "peekViewEditor.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
    "peekViewResult.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
    "peekViewEditor.background": pick({ dark: "#1f242888" }),
    "peekViewResult.background": pick({ dark: "#1f2428" }),

    "settings.headerForeground": workbenchForeground,
    "settings.modifiedItemIndicator": colorPalette.blue[4],
    "welcomePage.buttonBackground": colorPalette.gray[1],
    "welcomePage.buttonHoverBackground": colorPalette.gray[2],
  };
}

module.exports = createTheme;