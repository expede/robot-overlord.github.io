module App.View.Homepage.Intensives where

-------------------
-- Language Base --
-------------------

import Data.Function (($))
import Control.Bind (discard)

---------
-- App --
---------

import App.Events (Event)
import App.Navigate ((#>))
import App.Routes (Route(..), TrainingRoute(..))

---------------
-- Framework --
---------------

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (id, className)
import Text.Smolder.Markup          ((!), text)

----------

view :: HTML Event
view =
  section ! id "intensives" $ do
    div ! className "img"
        ! className "left"
        $ text ""

    div ! className "content"
        ! className "right" $ do

      h1 $ text "Intensive"
      h2 $ text "Hands-On Workshops and Deep Dives"

      p $ text "Our courses are offered as retreats or on-site, including:"

      ul do
        li $ text "Full week Elixir & Phoneix bootcamp"
        li $ text "Phoenix for Rubyists"
        li $ text "Scalable functional front-end bootcamp with Elm"
        li $ text "Zen front-ends with Om"
        li $ text "Functional foundations for Javascript"
        li $ text "...and custom material built to suit your needs"

      h2 $ text "Our course catalogue is expanding all the time"

      a #> Training TrainingHome
        $  text "See courses"
