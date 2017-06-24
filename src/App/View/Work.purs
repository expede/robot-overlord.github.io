module App.View.Work where

import App.Events (Event(..))
import App.State (State)
import App.Routes (Route(..), fromRoute)

import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Pux.DOM.Events (onClick)

import Text.Smolder.HTML (a, div, h1, img)
import Text.Smolder.HTML.Attributes (href, className, src)
import Text.Smolder.Markup ((!), (#!), text)

view :: State -> HTML Event
view s =
  div do
    img
      ! src "https://avatars2.githubusercontent.com/u/13892294?v=3&s=200"

    h1
      $ text "Work"

    a
      ! className "home"
      ! href (fromRoute Home)
      #! onClick (Navigate $ fromRoute Home)
      $ text "Work"
