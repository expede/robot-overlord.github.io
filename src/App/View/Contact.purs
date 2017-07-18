module App.View.Contact where

import App.Events (Event(..))
import App.State (State)
import App.Routes (Route(..), fromRoute)

import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Pux.DOM.Events (onClick)

import Text.Smolder.HTML
import Text.Smolder.HTML as HTML
import Text.Smolder.HTML.Attributes (action, id, className, method, name, placeholder, src, target, type', value, href)
import Text.Smolder.Markup ((!), (#!), text)

view :: State -> HTML Event
view s =
  section ! id "contact" $ do
    header ! id "top-header" $ do
      div ! id "inner-header" $ do
        h1 ! id "fp-header" $ text "Contact & Register"
        h2 $ text "Get in touch"

        form ! method "POST"
              ! action "http://formspree.io/beep@robotoverlord.io" $ do

          input ! type' "email"
                ! placeholder "Email"
                ! name "email"

          textarea ! name "message"
                   ! placeholder "Message"
                   $ text ""

          input ! type' "submit"
                ! value "Submit"
