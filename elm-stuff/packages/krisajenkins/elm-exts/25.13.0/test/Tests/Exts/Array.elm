module Tests.Exts.Array exposing (tests)

import Array exposing (..)
import ElmTest exposing (..)
import Exts.Array exposing (..)


tests : Test
tests =
    ElmTest.suite "Exts.Array"
        [ updateTests
        , deleteTests
        , unzipTests
        , singletonTests
        ]


updateTests : Test
updateTests =
    let
        anArray =
            Array.fromList [1..4]
    in
        ElmTest.suite "update"
            <| List.map defaultTest
                [ assertEqual anArray
                    (update -1 ((*) 2) anArray)
                , assertEqual (Array.fromList [ 1, 2, 6, 4 ])
                    (update 2 ((*) 2) anArray)
                , assertEqual anArray
                    (update 5 ((*) 2) anArray)
                ]


deleteTests : Test
deleteTests =
    let
        anArray =
            Array.fromList [1..4]
    in
        ElmTest.suite "delete"
            <| List.map defaultTest
                [ assertEqual anArray
                    (delete -1 anArray)
                , assertEqual (Array.fromList [2..4])
                    (delete 0 anArray)
                , assertEqual (Array.fromList [ 1, 2, 4 ])
                    (delete 2 anArray)
                , assertEqual anArray
                    (delete 4 anArray)
                ]


unzipTests : Test
unzipTests =
    ElmTest.suite "unzip"
        <| List.map defaultTest
            [ assertEqual ( Array.empty, Array.empty )
                (unzip Array.empty)
            , assertEqual
                ( Array.fromList [ 1 ]
                , Array.fromList [ "a" ]
                )
                (unzip (Array.fromList [ ( 1, "a" ) ]))
            , assertEqual
                ( Array.fromList [ 1, 2, 3 ]
                , Array.fromList [ "a", "b", "c" ]
                )
                (unzip
                    (Array.fromList
                        [ ( 1, "a" )
                        , ( 2, "b" )
                        , ( 3, "c" )
                        ]
                    )
                )
            ]


{-| I find it quite fun that this is the only test you need to make,
given the type signature. Parametricity can be mind-blowing...
-}
singletonTests : Test
singletonTests =
    ElmTest.suite "singleton"
        [ defaultTest
            (assertEqual (empty |> push ())
                (singleton ())
            )
        ]
