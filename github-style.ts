import { IColorPalette, IColorModePalette } from './colorPalette';
import * as chroma from 'chroma-js';

function createTheme(colorPalette: IColorPalette, mode: 'dark' | 'light') {
  const palette: IColorModePalette = colorPalette[mode];

  const workbenchForeground = palette.shade1;
  const editorForeground = palette.shade0

  return {
  name: 'GitHub Light Generated',
  colors: {
    focusBorder: palette.accent4,
    foreground: palette.shade2,
    descriptionForeground: palette.shade3,
    errorForeground: chroma(palette.accent0).darken(2).hex(),

    "textLink.foreground": chroma(palette.accent4).darken(1).hex(),
    "textLink.activeForeground": chroma(palette.accent4).darken(2).hex(),
    "textBlockQuote.background": palette.shade7,
    "textBlockQuote.border": palette.shade5,
    "textCodeBlock.background": palette.shade6,
    "textPreformat.foreground": palette.shade2,
    "textSeparator.foreground": palette.shade5,

    "button.background": chroma(palette.accent3).darken(1).hex(),
    "button.foreground": palette.shade7,
    "button.hoverBackground": chroma(palette.accent3).brighten().hex(),

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

    "badge.foreground": chroma(palette.accent4).darken(2).hex(),
    "badge.background": chroma(palette.accent4).darken(3).hex(),

    "progressBar.background": palette.accent4,

    "titleBar.activeForeground": workbenchForeground,
    "titleBar.activeBackground": palette.shade7,
    "titleBar.inactiveForeground": palette.shade3,
    "titleBar.inactiveBackground": palette.shade6,
    "titleBar.border": palette.shade5,

    "activityBar.foreground": workbenchForeground,
    "activityBar.inactiveForeground": palette.shade4,
    "activityBar.background": palette.shade7,
    "activityBarBadge.foreground": palette.shade7,
    "activityBarBadge.background": palette.accent4,
    "activityBar.activeBorder": chroma(palette.accent1).brighten().hex(),
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
    "list.inactiveFocusBackground": chroma(palette.accent4).brighten(3).hex(),
    "list.focusBackground": chroma(palette.accent4).brighten(4).hex(),

    "tree.indentGuidesStroke": palette.shade5,

    "notificationCenterHeader.foreground": palette.shade3,
    "notificationCenterHeader.background": palette.shade5,
    "notifications.foreground": workbenchForeground,
    "notifications.background": palette.shade7,
    "notifications.border": palette.shade5,
    "notificationsErrorIcon.foreground": chroma(palette.accent0).darken(1).hex(),
    "notificationsWarningIcon.foreground": chroma(palette.accent1).darken(2).hex(),
    "notificationsInfoIcon.foreground": chroma(palette.accent4).darken(2).hex(),

    "pickerGroup.border": palette.shade5,
    "pickerGroup.foreground": workbenchForeground,
    "quickInput.background": palette.shade7,
    "quickInput.foreground": workbenchForeground,

    "statusBar.foreground": palette.shade2,
    "statusBar.background": palette.shade7,
    "statusBar.border": palette.shade5,
    "statusBar.noFolderBackground": palette.shade7,
    "statusBar.debuggingBackground": palette.accent1,
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
    "tab.activeBorderTop": palette.accent1,

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
    "editorCursor.foreground": chroma(palette.accent4).darken(3).hex(),

    "editor.findMatchBackground": palette.accent2,
    "editor.findMatchHighlightBackground": chroma(palette.accent2).alpha(.4).hex(),
    "editor.inactiveSelectionBackground": chroma(palette.accent4).darken(1).alpha(.1).hex(),
    "editor.selectionBackground": chroma(palette.accent4).darken(1).alpha(.2).hex(),
    "editor.selectionHighlightBackground": chroma(palette.accent3).alpha(.3).hex(),
    "editor.selectionHighlightBorder": chroma(palette.accent3).alpha(0).hex(),
    "editor.wordHighlightBackground": chroma(palette.accent3).alpha(0).hex(),
    "editor.wordHighlightStrongBackground": chroma(palette.accent3).alpha(0).hex(),
    "editor.wordHighlightBorder": chroma(palette.accent3).darken(2).alpha(.6).hex(),
    "editor.wordHighlightStrongBorder": chroma(palette.accent3).darken(2).alpha(.3).hex(),
    "editorBracketMatch.background": chroma(palette.accent3).alpha(.3).hex(),
    "editorBracketMatch.border": chroma(palette.accent3).alpha(0).hex(),

    "editorGutter.modifiedBackground": palette.accent4,
    "editorGutter.addedBackground": chroma(palette.accent3).darken(1).hex(),
    "editorGutter.deletedBackground": chroma(palette.accent0).darken(1).hex(),

    "diffEditor.insertedTextBackground": chroma(palette.accent3).alpha(.2).hex(),
    "diffEditor.removedTextBackground": chroma(palette.accent0).darken(1).alpha(.25).hex(),
    "scrollbar.shadow": palette.shade6,                                                      //pick({ light: "#6a737d33", dark: "#0008" }),
    "scrollbarSlider.background": palette.shade5,                                            //pick({ light: "#959da533", dark: "#6a737d33" }),
    "scrollbarSlider.hoverBackground": palette.shade5,                                       //pick({ light: "#959da544", dark: "#6a737d44" }),
    "scrollbarSlider.activeBackground": palette.shade5,                                      //pick({ light: "#959da588", dark: "#6a737d88" }),
    "editorOverviewRuler.border": palette.shade7,                                             //colorPalette.white,

    "panel.background": palette.shade6,                                                       //pick({ light: colorPalette.gray[1], dark: "#1f2428" }),
    "panel.border": palette.shade5,                                                           //pick({ light: colorPalette.gray[2], dark: colorPalette.white }),
    "panelTitle.activeBorder": chroma(palette.accent1).darken(2).hex(),                     //"#f9826c",
    "panelTitle.activeForeground": workbenchForeground,
    "panelTitle.inactiveForeground": palette.shade3,                                          //colorPalette.gray[5],
    "panelInput.border": palette.shade5,                                                      //pick({ light: colorPalette.gray[2], dark: colorPalette.gray[1] }),

    "terminal.foreground": palette.shade2,                                                    //colorPalette.gray[6],

    "gitDecoration.addedResourceForeground": chroma(palette.accent3).darken(1).hex(),        //colorPalette.green[5],
    "gitDecoration.modifiedResourceForeground": chroma(palette.accent4).darken(2).hex(),    //colorPalette.blue[6],
    "gitDecoration.deletedResourceForeground": chroma(palette.accent0).darken(1).hex(),      // colorPalette.red[5],
    "gitDecoration.untrackedResourceForeground": chroma(palette.accent3).darken(1).hex(),    // colorPalette.green[5],
    "gitDecoration.ignoredResourceForeground": palette.shade4,                                //colorPalette.gray[4],
    "gitDecoration.conflictingResourceForeground": chroma(palette.accent1).darken(2).hex(), //colorPalette.orange[6],
    "gitDecoration.submoduleResourceForeground": palette.shade4,                              // colorPalette.gray[4],

    "debugToolBar.background": palette.shade7,                                                //pick({ light: colorPalette.white, dark: "#2b3036" }),
    "editor.stackFrameHighlightBackground": chroma(palette.accent2).brighten(3).hex(),          //pick({ light: colorPalette.yellow[1], dark: "#a707" }),
    "editor.focusedStackFrameHighlightBackground": chroma(palette.accent2).brighten(2).hex(),   // pick({ light: colorPalette.yellow[2], dark: "#b808" }),

    "peekViewEditor.matchHighlightBackground":chroma(palette.accent2).brighten(2).hex(),        // pick({ dark: "#ffd33d33" }),
    "peekViewResult.matchHighlightBackground":chroma(palette.accent2).brighten(2).hex(),        // pick({ dark: "#ffd33d33" }),
    "peekViewEditor.background": palette.shade4,                                              // pick({ dark: "#1f242888" }),
    "peekViewResult.background": palette.shade0,                                              // pick({ dark: "#1f2428" }),

    "settings.headerForeground": workbenchForeground,
    "settings.modifiedItemIndicator": palette.accent4,    //colorPalette.blue[4],
    "welcomePage.buttonBackground": palette.shade6,       // colorPalette.gray[1],
    "welcomePage.buttonHoverBackground": palette.shade5   // colorPalette.gray[2],
  }
};
}

module.exports = createTheme;