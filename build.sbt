lazy val root = project
  .in(file("."))
  .aggregate(portfolio.js, portfolio.jvm)
  .settings(
    publish := {},
    publishLocal := {}
  )

lazy val portfolio = crossProject(JSPlatform, JVMPlatform)
  .in(file("."))
  .settings(
    name := "portfolio",
    version := "0.1-SNAPSHOT",
    scalaVersion := "3.0.2",
    scalacOptions ++= Seq(
      "-feature",
      "-language:implicitConversions"
    )
  )
  .jvmSettings(
    run / fork := true,
    assembly / mainClass := Some("portfolio.Main"),
    assembly / assemblyJarName := "generate.jar"
  )
  .jsSettings(
    // Scala Deps
    libraryDependencies ++= Seq(
      ("org.scala-js" %%% "scalajs-dom" % "1.2.0")
        .cross(CrossVersion.for3Use2_13)
    ),
    scalaJSUseMainModuleInitializer := true
  )
