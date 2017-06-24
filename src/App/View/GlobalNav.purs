module App.View.GlobalNav where

--------------
-- App Base --
--------------

import App.Events (Event(..))
import App.Routes (Route(..), TrainingRoute(..), fromRoute)

-------------------
-- Language Base --
-------------------

import Control.Bind (discard)
import Data.Function (($))

---------------
-- Framework --
---------------

import Pux.DOM.Events (onClick)
import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (href, id, className)
import Text.Smolder.Markup ((!), (#!), text)

------------

view :: HTML Event
view =
    nav ! id "global-nav" $ do
      -- a ! className "training"
      --   #> Training TrainingHome
      --   $ text "Training"

      -- a ! className "oss"
      --   #> OpenSource
      --   $ text "Open Source"

      a ! className "contact"
        #> Contact
        $ text "Contact Us"

navigate htmlElement route =
  htmlElement
    !  href (fromRoute route)
    #! onClick (Navigate $ fromRoute route)

infixl 4 navigate as #>
