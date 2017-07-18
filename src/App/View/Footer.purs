module App.View.Footer where

import App.Events (Event(..))
import App.State (State)
import App.Routes (Route(..), fromRoute)

import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Pux.DOM.Events (onClick)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (action, id, className, method, name, placeholder, src, target, type', value, href)
import Text.Smolder.Markup ((!), (#!), text)

view :: HTML Event
view =
  footer ! id "global-footer" $ do
    h2 $ text "© 2017 Robot Overlord Software Inc."

    section ! id "newsletter" $ do
      h2 $ text "Updates, offers, tips, and more"

      form ! method "POST"
          ! action "https://goodbits.io/e/556cc53a-be05-41d2-9be0-eafda4340f47"
          ! target "_blank" $ do

        input ! type'       "text"
              ! name        "first_name"
              ! placeholder "First Name"

        input ! type'       "text"
              ! name        "last_name"
              ! placeholder "Last Name"

        input ! type'       "text"
              ! name        "email"
              ! placeholder "Email"

        input ! type' "submit"
              ! value "Subscribe"
