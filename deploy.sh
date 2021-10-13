# Copies the generated JS to dist.
# Before this script runs:
# - Index HTML that includes this file should be generated
#    (`sbt portfolioJVM/run (with prodction = true)`)
# - Optimized javascript should be generated.
#   (`sbt fullOptJS`)
cp js/target/scala-3.0.2/portfolio-opt.js dist/interaction.js