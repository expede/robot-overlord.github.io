module App.View.Homepage.Header where

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
import Text.Smolder.HTML.Attributes (id, className)
import Text.Smolder.Markup          ((!), text)

----------

view :: HTML Event
view =
  header ! className "full" $ do
    div ! className "inner" $ do
      h2 $ text "Vancouver's top"
      h1 ! id "fp-header" $ text "functional programming"
      h2 ! id "instructors"
         $ text "instructors"

      h3 $ text "Elixir • Phoenix • Elm • Clojure • React • Lodash • techniques • more"

    span ! id "continue"
         $ text "▼"
