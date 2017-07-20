module App.View.Homepage.Instructors where

-------------------
-- Language Base --
-------------------

import Data.Function (($))
import Control.Bind (discard)

---------
-- App --
---------

import App.Events (Event)

---------------
-- Framework --
---------------

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (className, href)
import Text.Smolder.Markup          ((!), text)

----------

view :: HTML Event
view =
  section ! className "full" $ do
    h1 do
      text "Passionate,"
      a ! href "https://twitter.com/expede/status/837666553999028225"
        $ text "Award Winning"
      text "Instructors"

    div do
      h2 $ text "Students from 6 countries (and counting)"
      h2 $ text "3 International conference talks"
      h2 $ text "1 mentorship award"
