module App.View.Homepage where

-------------------
-- Language Base --
-------------------

import Data.Function (($))
import Control.Bind (discard)

---------
-- App --
---------

import App.Events (Event)
import App.State (State)

----------------
-- Components --
----------------

import App.View.Homepage.Header       as Header
import App.View.Homepage.Intensives   as Intensives
import App.View.Homepage.Instructors  as Instructors
import App.View.Homepage.HeartFP      as HeartFP
import App.View.Homepage.Testimonials as Testimonials

---------------
-- Framework --
---------------

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML            (section)
import Text.Smolder.HTML.Attributes (id)
import Text.Smolder.Markup          ((!))

----------

view :: State -> HTML Event
view _ =
  section ! id "homepage" $ do
    Header.view

    -- section ! id "main" $ do
    --   Intensives.view
    --   Instructors.view
    --   Testimonials.view
    --   HeartFP.view
