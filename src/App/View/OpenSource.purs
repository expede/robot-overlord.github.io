module App.View.OpenSource where

import App.Events (Event(..))
import App.State (State)
import App.Routes (Route(..), fromRoute)

import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Pux.DOM.Events (onClick)

import Text.Smolder.HTML (section, a, div, h1, h2, h3, header, img, p, span)
import Text.Smolder.HTML as HTML
import Text.Smolder.HTML.Attributes -- (href, className, src)
import Text.Smolder.Markup ((!), (#!), text)

view :: State -> HTML Event
view s =
  section ! id "oss" $ do
    header ! id "top-header" $ do
      div ! id "inner-header" $ do
        h1 $ text "Open Source Software"
        h2 $ text "We're proud to have released several popular libraries, including:"

    section do
      h1 $ text "Exceptional"

    section do
      h1 $ text "Quark"

    section do
      h1 $ text "Algae"

    section do
      h1 $ text "Witchcraft"
