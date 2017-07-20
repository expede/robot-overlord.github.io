module App.View.Homepage.HeartFP where

-------------------
-- Language Base --
-------------------

import Data.Function (($))
import Control.Bind (discard)

---------
-- App --
---------

import App.Events   (Event)
import App.Navigate ((#>))
import App.Routes   (Route(..), TrainingRoute(..))

---------------
-- Framework --
---------------

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (className, id, href, target)
import Text.Smolder.Markup          ((!), text)

----------

view :: HTML Event
view =
  section ! className "full" $ do
    h1 $ do
      text "We"
      span ! id "heart"
            $ text " ♥ "
      text "FP"

    section ! className "center" $ do
      section ! className "half" $ do
        h2 ! className "content center" $ do

          text       "We believe that "
          em $ text  "functional programming is the future, "
          text       "and it's not hard to see why. Modern frameworks like "
          a ! href   "http://www.phoenixframework.org/"
            ! target "_blank"
            $ text   "Phoenix"
          text       "are built for web scale, realtime interactions, and speed up development. What's not to love?"

      div ! className "half" $ do
        h2  $ text "...like, a lot!"

        p $ do
          text     "Yes, we're \"those\" people. We founded the "
          a ! href "https://www.meetup.com/Vancouver-Functional-Programmers/events/222312064/"
            ! target "_blank"
            $ text "Vancouver Functional Programmers"
          text     "and"
          a ! href "https://www.meetup.com/Vancouver-Erlang-Elixir-Meetup/"
            ! target "_blank"
            $ text "Vancouver Erlang & Elixir"
          text     "meetups,"
          a ! href "http://www.elixir.london/Elixir-LDN-2017/brooklyn-zelenka"
            ! target "_blank"
            $ text "give international conference talks,"
          text     "and"
          a ! href "https://github.com/robot-overlord/robot-overlord.github.io"
            ! target "_blank"
            $ text "practice what we preach."

        p $ do
          text     "Our pasionate instructors curate languages, libraries, and techniques to find the most pragmatic tech with the highest gains over the competition. "
          text     "We even"
          a #> OpenSource
            $ text "maintain several of our own,"
          text     "including several Elixir libraries with dedicated followings."

        a #> Training TrainingHome
          $ h3 $ text "Come learn something awesome"
