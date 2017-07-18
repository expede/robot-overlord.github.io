module App.Navigate where

import App.Routes (fromRoute)
import App.Events (Event(..))

import Data.Function (($))

import Text.Smolder.Markup ((!), (#!))
import Text.Smolder.HTML.Attributes (href)

import Pux.DOM.Events (onClick)

navigate htmlElement route =
  htmlElement
    !  href (fromRoute route)
    #! onClick (Navigate $ fromRoute route)

infixl 4 navigate as #>
