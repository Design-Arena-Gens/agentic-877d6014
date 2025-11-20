import SceneWorldMap from "./SceneWorldMap";
import SceneInflationChart from "./SceneInflationChart";
import SceneInterestRates from "./SceneInterestRates";
import SceneGlobalGDP from "./SceneGlobalGDP";
import SceneMoonLanding from "./SceneMoonLanding";

const sceneComponents = {
  worldMap: SceneWorldMap,
  inflation: SceneInflationChart,
  rates: SceneInterestRates,
  gdp: SceneGlobalGDP,
  moonLanding: SceneMoonLanding
};

export default function SceneSection({ id, label, title, description, component }) {
  const Canvas = sceneComponents[component];

  return (
    <section id={id} className="scene">
      <div className="grain" aria-hidden />
      <header className="scene-header">
        <span className="scene-label">{label}</span>
        <h2 className="scene-title">{title}</h2>
        <p className="scene-description">{description}</p>
      </header>
      <div className="scene-canvas">
        {Canvas ? <Canvas /> : null}
      </div>
    </section>
  );
}
