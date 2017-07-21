module App.View.Homepage.Instructors where

-------------------
-- Language Base --
-------------------

import Data.Function (($))
import Control.Bind (discard)

---------
-- App --
---------

import App.Events   (Event)
import App.Navigate ((!>))

---------------
-- Framework --
---------------

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (className, id)
import Text.Smolder.Markup          ((!), text)

----------

view :: HTML Event
view =
  section ! id "instructors"
          ! className "full center-contents" $ do
    div do
      h1 do
        text "Passionate,"
        a !> "https://twitter.com/expede/status/837666553999028225"
          $  text "Award Winning"
        text "Instructors"

      div ! className "right" $ do
        h2 $ text "Students from 6 countries (and counting)"
        h2 $ text "3 International conference talks"
        h2 $ text "1 mentorship award"
