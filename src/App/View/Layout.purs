module App.View.Layout where

--------------
-- App Base --
--------------

import App.Events (Event)
import App.Routes (Route(..))
import App.State  (State(..))

--------------
-- Subviews --
--------------

import App.View.Global.Footer as Footer
import App.View.Global.Nav    as GlobalNav

import App.View.Homepage   as Homepage
import App.View.NotFound   as NotFound
import App.View.Training   as Training
import App.View.OpenSource as OpenSource
import App.View.Contact    as Contact

-------------------
-- Language Base --
-------------------

import Control.Bind  (discard)
import Data.Function (($))

---------------
-- Framework --
---------------

import Pux.DOM.HTML      (HTML)
import Text.Smolder.HTML (div)

------------

view :: State -> HTML Event
view state@(State {route}) =
  div $ do
    GlobalNav.view

    case route of
      Home                -> Homepage.view   state
      About               -> Homepage.view   state
      OpenSource          -> OpenSource.view state
      (Training training) -> Training.view   training
      Contact             -> Contact.view    state
      (NotFound url)      -> NotFound.view   state

    Footer.view
