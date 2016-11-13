module Tests.Exts.Maybe exposing (tests)

import Expect exposing (..)
import Exts.Maybe exposing (..)
import Test exposing (..)


tests : Test
tests =
    describe "Exts.Maybe"
        [ joinTests
        , validateTests
        , matchesTests
        ]


joinTests : Test
joinTests =
    describe "join"
        <| List.map (test "" << always)
            [ equal (Just 5)
                (join (+) (Just 2) (Just 3))
            , equal Nothing
                (join (+) Nothing (Just 5))
            , equal Nothing
                (join (+) (Just 5) Nothing)
            , equal Nothing
                (join (+) Nothing Nothing)
            , equal (Just 6)
                (List.foldl (join (+)) (Just 0) [ Just 1, Just 2, Just 3 ])
            , equal Nothing
                (List.foldl (join (+)) (Just 0) [ Just 1, Nothing, Just 2, Just 3 ])
            ]


isEven : Int -> Bool
isEven n =
    (n % 2) == 0


validateTests : Test
validateTests =
    describe "validate"
        <| List.map (test "" << always)
            [ equal (Just 2) (validate isEven 2)
            , equal Nothing (validate isEven 3)
            ]


matchesTests : Test
matchesTests =
    describe "matches"
        <| List.map (test "" << always)
            [ equal (Just 2) (matches isEven (Just 2))
            , equal Nothing (matches isEven (Just 3))
            , equal Nothing (matches isEven Nothing)
            ]
