[{
      "editorWidget.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "editor.foldBackground": pick({ light: primer.gray[0], dark: "#282e33" }),
      "editor.lineHighlightBackground": pick({ light: primer.gray[1], dark: "#2b3036" }),

      "editor.findMatchBackground": pick({ light: primer.yellow[4], dark: "#ffd33d44" }),
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

      "diffEditor.insertedTextBackground": pick({ light: "#34d05822", dark: "#28a74530" }),
      "diffEditor.removedTextBackground": pick({ light: "#d73a4922", dark: "#d73a4930" }),

      "scrollbar.shadow": pick({ light: "#6a737d33", dark: "#0008" }),
      "scrollbarSlider.background": pick({ light: "#959da533", dark: "#6a737d33" }),
      "scrollbarSlider.hoverBackground": pick({ light: "#959da544", dark: "#6a737d44" }),
      "scrollbarSlider.activeBackground": pick({ light: "#959da588", dark: "#6a737d88" }),

      "panel.background": pick({ light: primer.gray[1], dark: "#1f2428" }),

      "debugToolBar.background": pick({ light: primer.white, dark: "#2b3036" }),
      "editor.stackFrameHighlightBackground": pick({ light: primer.yellow[1], dark: "#a707" }),
      "editor.focusedStackFrameHighlightBackground": pick({ light: primer.yellow[2], dark: "#b808" }),
},
{
  "editorWidget.background": vary(palette.shade6, chroma(palette.shade0).darken(1).hex()),
  "editor.foldBackground": vary(palette.shade7, chroma(palette.shade1).darken(1).hex()),
  "editor.lineHighlightBackground": vary(palette.shade6, chroma(palette.shade1).darken(0.5).hex()),

  "editor.findMatchBackground": vary(palette.yellow, chroma(palette.yellow).lighten(1).hex()),
  "editor.findMatchHighlightBackground": vary(chroma(palette.yellow).alpha(.4).hex(), chroma(palette.yellow).alpha(0.3).hex()),
  "editor.inactiveSelectionBackground": vary(chroma(palette.accent1).darken(1).alpha(.1).hex(), chroma(palette.accent1).darken(1.5).alpha(.1).hex()),
  "editor.selectionBackground": vary(chroma(palette.accent1).darken(1).alpha(.2).hex(), chromma(palette.accent1).darken(2).alpha(.2).hex()),
  "editor.selectionHighlightBackground": vary(chroma(palette.accent0).alpha(.3).hex(), chroma(palette.accent3).lighten(2).hex()),
  "editor.selectionHighlightBorder": vary(chroma(palette.accent0).alpha(0).hex(), chroma(palette.accent3).alpha(0).hex()),
  "editor.wordHighlightBackground": vary(chroma(palette.accent0).alpha(0).hex(), chroma(palette.accent3).alpha(0).hex()),
  "editor.wordHighlightStrongBackground": vary(chroma(palette.accent0).alpha(0).hex(), chroma(palette.accent3).alpha(0).hex()),
  "editor.wordHighlightBorder": vary(chroma(palette.accent0).darken(2).alpha(.6).hex(),chroma(palette.accent3).alpha(.6).hex()),
  "editor.wordHighlightStrongBorder": vary(chroma(palette.accent0).darken(2).alpha(.3).hex(),chroma(palette.accent3).alpha(.5).hex()),
  "editorBracketMatch.background": vary(chroma(palette.accent0).alpha(.3).hex(),chroma(palette.accent3).alpha(.4).hex()),
  "editorBracketMatch.border": vary(chroma(palette.accent0).alpha(0).hex(),chroma(palette.accent3).alpha(0).hex()),

  "diffEditor.insertedTextBackground": vary(chroma(palette.green).alpha(.2).hex(), chroma(palette.green).alpha(.3).hex()),
  "diffEditor.removedTextBackground": vary(chroma(palette.red).darken(1).alpha(.25).hex(),chroma(palette.red).darken(1).alpha(.4).hex()),

  "scrollbar.shadow": vary(palette.shade6, palette.shade1),
  "scrollbarSlider.background": vary(palette.shade5, palette.shade3),
  "scrollbarSlider.hoverBackground": vary(palette.shade5,palette.shade4),
  "scrollbarSlider.activeBackground": vary(palette.shade5,palette.shade4),

  "panel.background": vary(palette.shade6, chroma(palette.shade0).darken(2).hex()),

  "debugToolBar.background": vary(palette.shade7, chroma(palette.shade0).darken(3).hex()),
  "editor.stackFrameHighlightBackground": vary(chroma(palette.yellow).brighten(3).hex(),chroma(palette.yellow).darken(3).hex()),
  "editor.focusedStackFrameHighlightBackground": vary(chroma(palette.yellow).brighten(2).hex(),chroma(palette.yellow).darken(2).hex()),

  "v": "#ffd33d"
}]