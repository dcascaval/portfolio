### Development

`sbt> ~ portfolioJVM/run development ; fastOptJS`
`serve -p 5000 .`
Use the `Live Sass Compiler` VS Code extension to watch `styles.css`.

### Production

`sbt> portfolioJVM/run production ; fullOptJS`
`./deploy.sh`
