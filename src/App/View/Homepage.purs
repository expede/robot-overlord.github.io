module App.View.Homepage where

-------------------
-- Language Base --
-------------------

import Data.Function (($))
import Control.Bind (discard)

---------
-- App --
---------

import App.Events (Event)
import App.Navigate ((#>))
import App.Routes (Route(..), TrainingRoute(..))
import App.State (State)

---------------
-- Framework --
---------------

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (id, className, target, href)
import Text.Smolder.Markup          ((!), text)

----------

view :: State -> HTML Event
view _ =
  section ! id "homepage" $ do
    header ! className "full" $ do
      div ! className "inner" $ do
        h2 $ text "Vancouver's top"
        h1 ! id "fp-header" $ text "functional programming"
        h2 ! id "instructors"
           $ text "instructors"

        h3 $ text "Elixir • Phoenix • Elm • Clojure • React • Lodash • techniques • more"

      span ! id "continue"
           $ text "▼"

    section ! id "main" $ do
      section ! id "intensives" $ do
        div ! className "img"
            ! className "left"
            $ text ""

        div ! className "content"
            ! className "right" $ do

          h1 $ text "Intensive"
          h2 $ text "Hands-On Workshops and Deep Dives"

          p $ text "Our courses are offered as retreats or on-site, including:"

          ul do
            li $ text "Full week Elixir & Phoneix bootcamp"
            li $ text "Phoenix for Rubyists"
            li $ text "Scalable functional front-end bootcamp with Elm"
            li $ text "Zen front-ends with Om"
            li $ text "Functional foundations for Javascript"
            li $ text "...and custom material built to suit your needs"

          h2 $ text "Our course catalogue is expanding all the time"
          a #> Training TrainingHome
            $  text "See courses"

      section ! className "full" $ do
        h1 do
          text "Passionate,"
          a ! href "https://twitter.com/expede/status/837666553999028225"
            $ text "Award Winning"
          text "Instructors"

        div do
          h2 $ text "Students from 6 countries (and counting)"
          h2 $ text "3 International conference talks"
          h2 $ text "1 mentorship award"

      section $ do
        div ! className "content"
            ! className "right" $ do

          -- div ! className "inner" $ do
          h1 $ text "What people are saying"
          h2 $ text "FP without the hard mode"

          blockquote do
            p $ text """
              I learned a lot at the Elixir bootcamp! What matters most when
              a teacher is helping their students learn something new is meeting
              people where they were at skill-wise. It was very clear and
              felt like a safe place to learn something new.
            """
            p $ text "~Stu Weir, STAT Search Analytics"

          -- h2 $ text "adpot the absolute best, pragmatic tools available"
          -- blockquote do
          --   p  $ text """
          --     Phoenix is really impressive. _______
          --   """
          --   p $ text "~Steve Godin, CodeCore"

        div ! className "img"
            ! className "right"
            $ text ""

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
