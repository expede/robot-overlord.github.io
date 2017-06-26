module App.View.Homepage where

import App.Events (Event)
import App.State (State)

import Control.Bind (discard)
import Data.Function (($))

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (id, src)
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

      -- span ! id "continue" $ do
      --   text "▼"

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
