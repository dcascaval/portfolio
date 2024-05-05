package portfolio

import collection.immutable.Map

trait KeyContext(name: String)(pairs: (String, String)*):
  val values: Map[String, String] =
    pairs.map((k, v) => (k.toLowerCase().trim(), v)).toMap
  def apply(key: String) =
    values.get(key.toLowerCase().trim()) match {
      case Some(t) => t
      case None    => throw new Exception(s"$name \"$key\" not found")
    }

object LinkContext
    extends KeyContext("Link")(
      "University of Washington" -> "https://www.cs.washington.edu/",
      "Ras Bodik" -> "https://homes.cs.washington.edu/~bodik/",
      "Adriana Schulz" -> "https://homes.cs.washington.edu/~adriana/",
      "Nate Holland" -> "https://www.linkedin.com/in/nate-holland-683ab76a",
      "Dana Cupkova" -> "https://danacupkova.com/",
      "Daragh Byrne" -> "http://www.daraghbyrne.me/",
      "Josh Bard" -> "http://joshbard.com/",
      "Seth Goldstein" -> "http://www.cs.cmu.edu/~seth/",
      "Charlie Garrod" -> "https://www.cs.cmu.edu/~charlie/",
      "Josh Bloch" -> "https://twitter.com/joshbloch",
      "Eddy Man Kim" -> "http://eddyman.kim/",
      "Nick Roberts" -> "https://www.linkedin.com/in/nick-roberts-135238139/",
      "NBBJ" -> "http://www.nbbj.com/",
      "AU18" -> "https://www.autodesk.com/autodesk-university/class/Cross-Platform-Unitized-Curtain-Wall-2018",
      "CAADRIA18" -> "http://papers.cumincad.org/data/works/att/caadria2018_333.pdf",
      "15-418" -> "http://www.cs.cmu.edu/~418/",
      "418-report" -> "https://nick-and-dan.github.io/418/files/report.pdf",
      "CUDA" -> "https://en.wikipedia.org/wiki/CUDA",
      "dag-repo" -> "https://github.com/dcascaval/dag",
      "Grasshopper3D" -> "https://www.grasshopper3d.com/",
      "Rhino3D" -> "https://www.rhino3d.com/",
      "Impala" -> "https://www.food4rhino.com/app/impala",
      "impala-repo" -> "https://github.com/dcascaval/Impala",
      "Join" -> "https://join.build",
      "robarch-paper" -> "https://link.springer.com/article/10.1007/s41693-018-0014-x",
      "bidirectional-paper" -> "https://arxiv.org/pdf/2110.01182.pdf",
      "lineage-paper" -> "https://dcascaval.github.io/lineage-based-cad-referencing-pldi23.pdf",
      "lineage-demo" -> "https://dcascaval.github.io/lineage/",
      "lineage-docs" -> "https://github.com/dcascaval/lineage-based-cad-referencing/blob/main/language-docs.md",
      "Blender" -> "https://www.blender.org/",
      "Scala.js" -> "https://www.scala-js.org/",
      "Github" -> "https://github.com/dcascaval",
      "Instagram" -> "https://www.instagram.com/de.methodic/",
      "LinkedIn" -> "https://www.linkedin.com/in/dan-cascaval/",
      "Mail" -> "mailto:dan@cascaval.org",
      "Branch" -> "https://www.branch3d.com/", 
      "branch-jobs" -> "https://structurecraft.com/hiring/#branch",
      "StructureCraft" -> "https://structurecraft.com/",
    )

object ImageContext
    extends KeyContext("Image")(
      "facade-painter" -> "facade-painter-iso-hires.png",
      "facade-toolkit" -> "facade-toolkit-3.png",
      "panel-designer" -> "panel-designer-ui-hires.png",
      "sentient-regions" -> "sentient_gregions_2.png",
      "sentient-fabrication" -> "fabrication_overview.png",
      "sentient-thermals" -> "sentient_thermal_3.jpg",
      "dag" -> "dag_structure.png"
    )
