module App.View.Training where

import App.Events (Event)
import App.Routes (Route(..), TrainingRoute(..), fromRoute)
import App.Navigate ((#>))

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
        h2 $ text "Have your team hit the ground running"

      span ! id "continue"
           $ text "▼"

    section ! id "elixir" $ do
      h1 $ text "Elixir & Phoenix"

      h2 $ text "Learning outcomes"

      ul do
        li $ text "Understanding of Elixir syntax"
        li $ text "Flow-based programming"
        li $ text "Primitive data structures"
        li $ text "Modelling data in Elixir"
        li $ text "Optional types & typespecs"
        li $ text "The Actor Model"
        li $ text "Fault tollerant systems with OTP"
        li $ text "Phoenix's MVVC+ archetecture"
        li $ text "CRUD verticals"
        li $ text "Channels & sockets"
        li $ text "Best practices & style guide"
        li $ text "Unit, doc, behaviour, and property testing"
        li $ text "Recommendations from the field"
        li $ text "Starter kit"

      section do
        section ! className "full" $ do
          h2 $ text "Elixir & Phoenix Bootcamp"
          h3 $ text "A very full 5 day bootcamp"
          h3 $ text "$3500/seat"

          a ! className "follow"
            #> Contact
            $ text "Book now"

      section do
        section ! className "full" $ do
          h2 $ text "Elixir from the ground up"
          h3 $ text "3 day hands-on workshop"
          h3 $ text "$2200/seat"

          a ! className "follow"
            #> Contact
            $ text "Book now"

      section do
        section ! className "full" $ do
          h2 $ text "Phoenix for Rubyists: Part I"
          h3 $ text "3 day hands-on workshop"
          h3 $ text "$2200/seat"

        p  $ text """
        Coming from Ruby and Rails? Elixir & Phoenix drew inspiration (and contributors) from Ruby & Rails.
        While this is a helpful starting place, Elixir turns Ruby on its head. Using pipelining
        and the actor model over the more traditional object oriented and inheritance style of Ruby
        trips many people up. Further, Phoenix eliminates many of the scaling workarounds that we need
        in Rails, but comes with a few changes to the base archetecture.
        """

        p $ text """
        Our instructors come from a strong Ruby background, and have helped multiple teams
        navigate the transition to Elixir and Phoenix.
        """

      section do
        section ! className "full" $ do
          h2 $ text "Phoenix for Rubyists: Part II"
          h3 $ text "2 day hands-on workshop"
          h3 $ text "$1500/seat"

        p  $ text """
        While Part I takes you through a standard Phoenix app, Part II goes even deeper.
        We discuss additions to the core archetecture to further improve performance,
        and more importantly to make code even more reusable and cut through the
        last of the boilerplate.
        """

        p $ text """
        While optional, we recommend that students come with an existing Phoenix
        application to refactor. Just finished Part I? Not to worry,
        the app from that course will suit this purpose!
        """

        a ! className "follow"
          #> Contact
          $ text "Book now"

    section ! id "js" $ do
      h1 $ text "Javascript"
      h2 $ text "Learning outcomes"

      ul do
        li $ text "Immutability"
        li $ text "Understanding explicit recursion"
        li $ text "Code reuse with classic combinators"
        li $ text "Highly reproducable tests"
        li $ text "Faster code with fewer lines"
        li $ text "Comparison of functional libraries"
        li $ text "Functionally refactoring React code"
        li $ text "Best practices & style guide"
        li $ text "Unit, doc, behaviour, and property testing"
        li $ text "Recommendations from the field"
        li $ text "Starter kit"

      section do
        section ! className "full" $ do
          h2 $ text "Functional foundations with Javascript"
          h3 $ text "2 day hands-on workshop"
          h3 $ text "$1500/seat"

          a ! className "follow"
            #> Contact
            $ text "Book now"

        p $ text """
        Javascript: fast, ubiquitous, functional.
        """

    section ! id "coming-soon" $ do
      h1 $ text "Coming soon or on request"

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
