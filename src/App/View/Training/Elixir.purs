module App.View.Training.Elixir where

import App.Events (Event(..))
import App.State (State)
import App.Routes (Route(..), TrainingRoute(..), fromRoute)

import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Pux.DOM.Events (onClick)

import Text.Smolder.Markup (MarkupM, class Attributable, class Eventable)
import Text.Smolder.HTML (a, section, h1, h2, img, nav, header)
import Text.Smolder.HTML.Attributes (href, className, src)
import Text.Smolder.Markup ((!), (#!), text)

-- navigate :: forall html.
--             Eventable (Event -> Event) html => Attributable html =>
--             html -> Route -> html

view :: HTML Event
view =
  section do
    header do
      img ! src "https://avatars2.githubusercontent.com/u/13892294?v=3&s=200"
      h1  $ text "Elixir"
      h2  $ text "Changing the way the world writes software"
