module App.View.Homepage where


import App.Events (Event)
import App.Navigate ((#>))
import App.Routes (Route(..), TrainingRoute(..))
import App.State (State)

import Data.Function (($))
import Control.Bind (discard)

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (action, id, className, method, name, placeholder, src, target, type', value, href)
import Text.Smolder.Markup ((!), text)

view :: State -> HTML Event
view _ =
  section ! id "homepage" $ do
    header ! id "top-header" $ do
      div ! id "inner-header" $ do

        h2 $ text "Vancouver's top"
        h1 ! id "fp-header" $ text "functional programming"
        h2 ! id "instructors"
           $ text "instructors"
        h3 $ text "Elixir • Phoenix • Elm • Clojure • React • Lodash • techniques • more"

      span ! id "continue"
           $ text "▼"

    section ! id "marketing" $ do
      section ! id "intensives" $ do
        div ! className "img-block-2"
            $ text ""

        div ! className "content-block" $ do
          h1 $ text "Intensive"
          h2 $ do
            text "Hands-On Workshops and Deep Dives"

          p $ text "Our courses are offered as retreats or on-site, including:"

          ul do
            li $ text "Full week Elixir & Phoneix bootcamp"
            li $ text "Phoenix for Rubyists"
            li $ text "Scalable functional front-end bootcamp with Elm"
            li $ text "Zen front-ends with Om"
            li $ text "Functional foundations for Javascript"
            li $ text "...and custom material built to suit your needs"

  -- link to courses page
  -- inlcude a form to suggest new courses
          h2 $ text "Our course catalogue is expanding all the time"
          a ! href "" $ text "See courses"

      section ! className "full" $ do
        div do
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
        div ! className "content-block block-right" $ do
          div !className "inner" $ do
            h1 $ text "What people are saying"
            h2 $ text "FP without the hard mode"

            blockquote do
              p $ text "Sorry, Data. Shields up! Rrrrred alert! I recommend you don't fire until you're within 40,000 kilometers. Yes, absolutely, I do indeed concur, wholeheartedly!"
              p $ text "Libraries come and go, but techniques are forever"
              p $ text "~ Commander Riker, USS Enterprise"


            h2 $ text "adpot the absolute best, pragmatic tools available"
            p  $ text "Even experienced developers find value in having a guide to avoid common pitfalls, get a sense of idiomatic solution, and to have best practices shown in context."

            blockquote do
              p $ text "Sorry, Data. Shields up! Rrrrred alert! I recommend you don't fire until you're within 40,000 kilometers. Yes, absolutely, I do indeed concur, wholeheartedly!"
              p $ text "~ Commander Riker, USS Enterprise"

        div ! className "img-block block-right"
            $ text ""

      section ! className "full" $ do
        h1 $ do
          text "We"
          span ! className "red"
               $ text " ♥ "
          text "FP"

      section ! id "bar" $ do
        div ! className "half-block" $ do
          h2 ! className "content center" $ do
            -- h1 ! className "back" $ text "“"
            -- h1 ! className "back" $ text "”"

            text       "We believe that "
            em $ text  "functional programming is the future, "
            text       "and it's not hard to see why. Modern frameworks like "
            a ! href   "http://www.phoenixframework.org/"
              ! target "_blank"
              $ text   "Phoenix"
            text       "are built for web scale, realtime interactions, and speed up development. What's not to love?"

        div ! className "half-block" $ do
          h2  $ text "...like, a lot!"
          p   $ do
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

          h3 ! id "foo" $ do
            a #> (Training TrainingHome)
              $ text "Come learn something awesome"
