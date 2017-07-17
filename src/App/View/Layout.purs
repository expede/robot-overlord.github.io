module App.View.Layout where

--------------
-- App Base --
--------------

import App.Events (Event(..))
import App.Routes (Route(..))
import App.State (State(..))
import App.Routes (Route(..), TrainingRoute(..), fromRoute)

--------------
-- Subviews --
--------------

import App.View.Footer    as Footer
import App.View.GlobalNav as GlobalNav
import App.View.Homepage  as Homepage
import App.View.NotFound  as NotFound
import App.View.Training  as Training
import App.View.Work      as Work

-------------------
-- Language Base --
-------------------

import Control.Bind (discard)
import Data.Function (($))

---------------
-- Framework --
---------------

import Pux.DOM.Events (onClick)
import Pux.DOM.HTML (HTML, style)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (href, id, className, src)
import Text.Smolder.Markup ((!), (#!), text)

------------

view :: State -> HTML Event
view state@(State {route}) =
  div $ do
    GlobalNav.view

    case route of
      Home                -> Homepage.view state
      About               -> Homepage.view state
      OpenSource          -> Work.view     state
      (Training training) -> Training.view training
      Contact             -> Work.view     state
      (NotFound url)      -> NotFound.view state

    Footer.view
