module App.View.OpenSource where

import App.Events (Event(..))
import App.State (State)
import App.Routes (Route(..), fromRoute)

import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Pux.DOM.Events (onClick)

import Text.Smolder.HTML (section, a, div, h1, h2, h3, header, img, p, span, ul, li)
import Text.Smolder.HTML as HTML
import Text.Smolder.HTML.Attributes -- (href, className, src)
import Text.Smolder.Markup ((!), (#!), text)

view :: State -> HTML Event
view s =
  section ! id "oss" $ do
    header ! id "top-header" $ do
      div ! id "inner-header" $ do
        h1 ! id "fp-header" $ text "Open Source Software"
        h2 $ text "We're proud to sponsor several libraries"

    section do
      h1 $ text "Elixir Libraries"

      p  $ text """
      We belive deeply in Elixir. We are one of the few shops to have used Phoenix
      since before the 1.0, and have both founded the Vancouver Erlang & Elixir Meetup,
      and trained several companies in Canada and abroad on how to use them.
      """

      p $ text """
      Along the way, we've developed a number of tools that we've found helpful.
      As huge fans of open source, we're happy to share them with the world,
      and to provide support for their ongoing development.
      """

      section ! id "exceptional" $ do
        h2 $ text "Exceptional"
        h3 $ text "Freedom from {:error}s"

        p $ text """
        Exceptional is an Elixir library providing helpers for working with exceptions.
        It aims to make working with plain old (unwrapped) Elixir values more convenient,
        and to give full control back to calling functions.
        """
        p $ text """
        Elixir has traditionally used tagged tuples like {:ok, 42} to track success and error states.
        Tuples depend heavily on length and position. Exceptional bootstraps up from
        Elixir's native exception structs, which model errors as specialized maps.
        Combined with a few oprtators, this not only makes errors easier to recover from,
        it automatically works beautifully with the rest of the ecosystem, especially Phoenix.
        """

        h3 $ text "Links"

        ul do
          li $
            a ! href "https://medium.com/the-monad-nomad/exceptional-freedom-from-error-s-eaabfae25d72#.zgbne4gja"
              ! target "_blank"
              $ text "Medium Article"

          li $
            a ! href "https://hexdocs.pm/exceptional/readme.html"
              ! target "_blank"
              $ text "Docs"

          li $
            a ! href "https://hex.pm/packages/exceptional"
              ! target "_blank"
              $ text "Hex"

          li $
            a ! href "https://github.com/expede/exceptional"
              ! target "_blank"
              $ text "GitHub"

      section ! id "quark" $ do
        h2 $ text "Quark"
        h3 $ text "Elixir's missing classic functional programming library"

        p $ text """
        Elixir is a great FP language, but the standard library has some differences
        from the classic FP tradition going back to the 1940s. Quark bridges the gap
        by providing currying, functional compositon, and common combinators
        like id and flip to help write highly reusable functional code
        """

        h3 $ text "Links"

        ul do
          li $
            a ! href "https://hexdocs.pm/quark/readme.html"
              ! target "_blank"
              $ text "Docs"

          li $
            a ! href "https://hex.pm/packages/quark"
              ! target "_blank"
              $ text "Hex"

          li $
            a ! href "https://github.com/expede/quark"
              ! target "_blank"
              $ text "GitHub"

      section ! id "algae" $ do
        h2 $ text "Algae"
        h3 $ text "Bootstrapped algebraic data types"

        p $ text """
        Robust, typed data modelling has not been a huge strength for Elixir... until now.
        Algae gives developers the ability to define structs in relationships,
        generate typespecs, and contructors, all with a handy DSL.
        """

        p $ text """
        Algae also comes with a number of common datatypes right out of the box,
        and instances for protocols and Witchcraft classes.
        """

        h3 $ text "Links"

        ul do
          li $
            a ! href "https://hexdocs.pm/algae/readme.html"
              ! target "_blank"
              $ text "Docs"

          li $
            a ! href "https://hex.pm/packages/algae"
              ! target "_blank"
              $ text "Hex"

          li $
            a ! href "https://github.com/expede/algae"
              ! target "_blank"
              $ text "GitHub"

      section ! id "witchcraft" $ do
        h2 $ text "Witchcraft"
        h3 $ text "Monads and other dark magic"

        p $ text """
        Also known as "Scalaz for Elixir" or "the Haskell Prelude port", Witchcraft is
        the culmination of multiple years of work. Leveraging several support libraries,
        Witchcraft brings a huge amount of abstraction to Elixir, including functors,
        applicatives, monads, and more, while remaining fully compatible with
        the main Erlang and Elixir ecosystems.
        """

        p $ text """
        By far our most anticipated effort, Witchcraft is intended to be both a
        brige to developers learning about categorical patterns, and to enable the
        full power and experience of programmers coming from Haskell, PureScript, and
        Scalaz.
        """

        h3 $ text "Links"

        ul do
          li $
            a ! href "https://hexdocs.pm/witchcraft/readme.html"
              ! target "_blank"
              $ text "Docs"

          li $
            a ! href "https://hex.pm/packages/witchcraft"
              ! target "_blank"
              $ text "Hex"

          li $
            a ! href "https://github.com/expede/witchcraft"
              ! target "_blank"
              $ text "GitHub"

      section ! id "typeclass" $ do
        h2 $ text "TypeClass"
        h3 $ text "(Semi-)principled type classes for Elixir"

        p $ text """
        A fundamental component of Witchcraft, TypeClass brings property-based,
        heirarchical type classes to Elixir. Think of them as protocols on steroids,
        guaranteeing that instances behave in a particular fashion.
        """

        h3 $ text "Links"

        ul do
          li $
            a ! href "https://hexdocs.pm/type_class/readme.html"
              ! target "_blank"
              $ text "Docs"

          li $
            a ! href "https://hex.pm/packages/type_class"
              ! target "_blank"
              $ text "Hex"

          li $
            a ! href "https://github.com/expede/type_class"
              ! target "_blank"
              $ text "GitHub"
