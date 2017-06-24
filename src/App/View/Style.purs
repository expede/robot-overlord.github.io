module App.View.Style where

import CSS
import CSS.Border (borderLeft)

import CSS.Common (center)
import CSS.Text.Transform (textTransform, uppercase)
import CSS.TextAlign (textAlign, leftTextAlign)
import Control.Bind (discard)
import Data.Function ((#), ($))
import Data.NonEmpty (NonEmpty(NonEmpty))

css :: CSS
css = do
  importUrl "https://fonts.googleapis.com/css?family=Exo:900,900i|Open+Sans"

  body ? do
    backgroundColor $ rgb 239 239 239
    color black
    fontFamily ["Open Sans"] (NonEmpty sansSerif [])
    fontSize (14.0 #px)

  h1 `also` h2 `also` navLinks ? do
    textTransform uppercase
    fontFamily ["Exo"] (NonEmpty sansSerif [])

  h1 ? do
    fontSize $ 3.0 #em

  h2 ? do
    fontSize $ 2.0 #em

  globalNav ? do
    position absolute
    top   $ 1.0 #em
    right $ 1.0 #em

  navLinks ? do
    fontSize $ 1.25 #em

  a ? do
    borderRadius (2.0 #px) (2.0 #px) (2.0 #px) (2.0 #px)
    padding      (6.0 #px) (6.0 #px) (6.0 #px) (6.0 #px)
    textDecoration noneTextDecoration

  fromString "#top-header" ? do
    width (100.0 #vw)
    height (100.0 #vh)

    display flex
    alignItems center
    justifyContent center

  fromString "#inner-header" ? do
    maxWidth $ 66.6 #pct

  fromString "#continue" ? do
    position absolute
    top $ 95.0 #pct

  fromString "#top-header h1" ? do
    fontSize (8.0 #em)
    margin (0.0 #em) (0.0 #em) (0.0 #em) (0.0 #em)
    fontStyle "italic"

  fromString "#inner-header" ? do
    width (80.0 #em)
    display inlineBlock
    textAlign leftTextAlign

  fromString "#logo" ? do
    width $ 25.0 #em

  fromString "#pagey" ? do
    borderLeft solid (3.0 #em) red
    backgroundColor white
    width $ 50.0 #pct

also :: Selector -> Selector -> Selector
also x y = Selector (Refinement []) (Combined x y)

fontStyle :: String -> CSS
fontStyle = key $ fromString "font-style"

globalNav :: Selector
globalNav = fromString "#global-nav"

navLinks :: Selector
navLinks = globalNav `child` a
