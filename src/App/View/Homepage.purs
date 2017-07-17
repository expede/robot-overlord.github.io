module App.View.Homepage where

import Text.Smolder.HTML

import App.Events (Event)
import App.State (State)
import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML.Attributes (action, id, method, name, placeholder, src, target, type', value)
import Text.Smolder.Markup ((!), text)

view :: State -> HTML Event
view _ =
  section ! id "homepage" $ do
    header ! id "top-header" $ do
      div ! id "inner-header" $ do
        img ! id "logo"
            ! src "/static/happybot.svg"

        h1 do
          text "Robot"
          br
          text "Overlord"

        h2 $ text "Changing the way the world writes software"

      span ! id "continue" $ do
        text "▼"

    section ! id "contact-form" $ do
      h1 $ text "Get in touch"

      form ! method "POST"
           ! action "http://formspree.io/beep@robotoverlord.io"
           $ do

        input ! type' "email"
              ! name "email"
              ! placeholder "Your email"

        textarea ! name "message"
                 ! placeholder "Your message"
                 $ text ""

        button ! type' "submit"
               $ text "Send"

      h1 $ text "Stay up to date"
      h2 $ text "Updates, offers, tips, and more"

      form ! method "POST"
           ! action "https://goodbits.io/e/556cc53a-be05-41d2-9be0-eafda4340f47"
           ! target "_blank"
           $ do

        input ! type' "text"
              ! name  "first_name"
              ! placeholder "First Name"

        input ! type' "text"
              ! name  "last_name"
              ! placeholder "Last Name"

        input ! type' "text"
              ! name  "email"
              ! placeholder "Email"

        input ! type' "submit"
              ! value "Subscribe"

-- <form method="post" action="https://goodbits.io/e/556cc53a-be05-41d2-9be0-eafda4340f47" target="_blank">
--   <input type="text" name="first_name" placeholder="First Name"></input>
--   <input type="text" name="last_name" placeholder="Last Name"></input>
--   <input type="text" name="email" placeholder="Email"></input>
--   <input type="submit" value="Subscribe">
-- </form>

    -- section ! id "pagey" $ do
    --   section do
    --     h1 $ text "Stay ahead of the curve"
    --     p  $ text """
    --       It's well known that tech is a fast moving field
    --     """
    --     p  $ text """
    --       Our pasionate instructors curate new and emerging technologies
    --       as they become available to ensure that we have the most up to date
    --       material and references
    --     """

    --   section do
    --     h1 $ text "Intensive Hands-On Workshops and Deep Dives"
    --     p  $ text ""

    --   section do
    --     h1 $ text "Passionate, Award Winning Instructors"
    --     p  $ text "We teach because we love tech"

    --   section do
    --     h1 $ text "Training"
    --     p  $ text "We offer many different three main training modalities: class, on-site, and retreat"

-- -- navigate :: Eventable (Event -> Event) Event
-- --          => Attributable Event
-- --          => Event
-- --          -> Route
-- --          -> Event
-- navigate htmlElement route =
--   htmlElement
--     !  href (fromRoute route)
--     #! onClick (Navigate $ fromRoute route)

-- infixl 4 navigate as #>
