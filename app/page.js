import SceneSection from "./components/SceneSection";

const scenes = [
  {
    id: "scene-1",
    component: "worldMap",
    label: "Scene 1",
    title: "The World of 1969",
    description:
      "A cinematic tableau of 1969 globalization: industrial lights, trade arteries, and an uneasy balance between growth and volatility shimmering across continents."
  },
  {
    id: "scene-2",
    component: "inflation",
    label: "Scene 2",
    title: "Inflation Rising",
    description:
      "Prices ignite across advanced economies as Vietnam-era spending, commodity shocks, and surging consumer demand push inflation to decade highs."
  },
  {
    id: "scene-3",
    component: "rates",
    label: "Scene 3",
    title: "1969 Interest Rates",
    description:
      "Central banks lift benchmark rates in a coordinated tightening arc, signaling the end of easy credit and the dawn of a sharper monetary cycle."
  },
  {
    id: "scene-4",
    component: "gdp",
    label: "Scene 4",
    title: "Global GDP Slowdown",
    description:
      "Growth momentum softens region by region, revealing the drag from higher borrowing costs, war spending rebalancing, and structural capacity constraints."
  },
  {
    id: "scene-5",
    component: "moonLanding",
    label: "Scene 5",
    title: "Moon Landing Economic Impact",
    description:
      "From the Saturn V plume to semiconductor fabs, Apollo-era investment spills into civilian innovation, anchoring a new frontier of technological spillovers."
  }
];

export default function Page() {
  return (
    <main>
      <header>
        <h1 className="documentary-title">1969 Economic Chronicle</h1>
        <p className="documentary-subtitle">A Cinematic Scroll through Fiscal Tides and Lunar Reverberations</p>
      </header>
      <div className="scene-grid">
        {scenes.map((scene) => (
          <SceneSection key={scene.id} {...scene} />
        ))}
      </div>
    </main>
  );
}
