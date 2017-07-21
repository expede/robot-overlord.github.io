module App.Navigate where

---------
-- App --
---------

import App.Events (Event(..))
import App.Routes (fromRoute)

-------------------
-- Language Base --
-------------------

import Data.Function (($))

---------------
-- Framework --
---------------

import Pux.DOM.Events (onClick)

import Text.Smolder.HTML.Attributes (href, target)
import Text.Smolder.Markup
  ( class Attributable
  , (!), (#!)
  )

----------

navigate htmlElement route =
  htmlElement
    !  href (fromRoute route)
    #! onClick (Navigate $ fromRoute route)

infixl 4 navigate as #>

externalLink :: forall html. Attributable html => html -> String -> html
externalLink htmlElement link =
  htmlElement
    ! href   link
    ! target "_blank"

infixl 4 externalLink as !>
