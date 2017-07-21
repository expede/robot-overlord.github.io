module App.View.Global.Nav where

--------------
-- App Base --
--------------

import App.Events   (Event)
import App.Navigate ((#>))
import App.Routes   (Route(..), TrainingRoute(..))

-------------------
-- Language Base --
-------------------

import Control.Bind  (discard)
import Data.Function (($))

---------------
-- Framework --
---------------

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML            (nav, a)
import Text.Smolder.HTML.Attributes (className, id)
import Text.Smolder.Markup          ((!), text)

------------

view :: HTML Event
view =
  nav ! id "global-nav" $ do
    a #> Home
      ! className "logo"
      $ text ""

    -- a ! className "home"
    --   #> Home
    --   $ text "Home"

    -- a ! className "training"
    --   #> Training TrainingHome
    --   $ text "Learn with us"

    -- a ! className "oss"
    --   #> OpenSource
    --   $ text "Open Source"

    -- a ! className "follow"
    --   #> Contact
    --   $ text "Contact"
