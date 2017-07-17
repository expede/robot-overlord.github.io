module App.View.Footer where

import App.Events (Event(..))
import App.State (State)
import App.Routes (Route(..), fromRoute)

import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Pux.DOM.Events (onClick)

import Text.Smolder.HTML (a, div, h2, img, footer, p)
import Text.Smolder.HTML.Attributes (href, className, src, id)
import Text.Smolder.Markup ((!), (#!), text)

view :: HTML Event
view =
  footer ! id "global-footer" $ do
    h2 $ text "Content © 2017 Robot Overlord Software Inc."

    a ! className "home"
      ! href (fromRoute Home)
      #! onClick (Navigate $ fromRoute Home)
      $ text "Work"
