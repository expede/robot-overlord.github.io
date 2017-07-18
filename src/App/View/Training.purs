module App.View.Training where

import App.Events (Event)
import App.Routes (TrainingRoute(..))

import Data.Function (($))
import Control.Bind (discard)

-- import App.View.Training.Elixir as ElixirView
import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (action, id, className, method, name, placeholder, src, target, type', value, href)
import Text.Smolder.Markup ((!), text)

import Pux.DOM.HTML (HTML)

view :: TrainingRoute -> HTML Event
view _ =
  section ! id "training" $ do
    header ! id "top-header" $ do
      div ! id "inner-header" $ do

        h1 ! id "fp-header" $ text "Courses & bootcamps"
        h2 $ text "Because learning curves can be lowered"

      span ! id "continue"
           $ text "▼"

    section ! id "elixir" $ do
      h1 $ text "Elixir & Phoenix"
      p  $ text "blah blah bah we're good at this"

      h2 $ text "Learning outcomes"

      ul do
        li $ text "Understanding of Elixir syntax"
        li $ text "Flow based programming"
        li $ text "Data structures"
        li $ text "Modelling data in Elixir"
        li $ text "Optional types & typespecs"
        li $ text "Fault tollerant systems with OTP"
        li $ text "Phoenix's MVVC+ archetecture"
        li $ text "CRUD verticals"
        li $ text "Channels & sockets"
        li $ text "Best practices & style guide"
        li $ text "Unit, doc, behaviour, and property testing"
        li $ text "Recommendations from the field"
        li $ text "Starter kit"

      section do
        h1 $ text "Elixir & Phoenix Bootcamp"
        h2 $ text "A full 5 day, 40-hour bootcamp"
        p  $ text ""

      section do
        h1 $ text "Elixir from the ground up"

      section do
        h1 $ text "Phoenix for Rubyists"
        p  $ text """
        Coming from Ruby? Elixir & Phoenix drew inspiration (and contributors) from Ruby & Rails.
        While this is a helpful starting place, Elixir turns Ruby on its head. Using pipelining
        and the actor model over the more traditional object oriented and inheritance style of Ruby
        trips many people up. Further, Phoenix eliminates many of the scaling workarounds that we need
        in Rails, but comes with a few changes to the base archetecture.
        """

        p $ text """
        Our instructors come from a strong Ruby background, and have helped multiple teams
        navigate the transition to Elixir and Phoenix.
        """

    section ! id "js" $ do
      h1 $ text "Functional foundations with Javascript"
      p  $ text "blah blah bah we're good at this"

      h2 $ text "Learning outcomes"

      ul do
        li $ text "Understanding of Elixir syntax"

    section ! id "coming-soon" $ do
      h1 $ text "Coming soon"

      p $ text "The below are currently slated for development. Want to see something else? Drop us a line, and let us know!"
      p $ text "We're happy t develop customized material for clients, if something is not on the list below."

      ul do
        li $ text "Clojure, ClojureScript, Ring, Om"
        li $ text "PureScript & Pux"
        li $ text "Haskell for web (Yesod, Servant)"
        li $ text "GraphQL and Relay 2"
        li $ text "Functional techniques for scaling Ruby applications"
        li $ text "Scalaz"
        li $ text "Swiftz"
        li $ text "Golang"
        li $ text "Rust"

      p $ text "Select courses are being prepared for online release....."
