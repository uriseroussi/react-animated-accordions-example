import SimpleAccordion from './components/SimpleAccordion';
import ContentAdder from './components/ContentAdder';
import AutoHeightAnimatedAccordion from './components/AutoHeightAnimatedAccordion';
import GridAnimatedAccordion from './components/GridAnimatedAccordion';
import ControlledHeightAnimatedAccordion from './components/AnimatedAccordion';

function App() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-12">
      <SimpleAccordion title="Simple Accordion - No Animation">
        <p>Your no frills accordion.</p>
        <ContentAdder />
      </SimpleAccordion>

      <GridAnimatedAccordion title="Animated Accordion - Grid Rows">
        You can transition the template-grid-rows CSS property from 0fr to 1fr
        to achieve an animatable auto calculation of height for the accordion.
        <ContentAdder />
      </GridAnimatedAccordion>

      <AutoHeightAnimatedAccordion title="Animated Accordion - Interpolate Size">
        With the new CSS property interpolate-size, it is now possible to
        animate from height 0 to height auto. Look out for browser availability
        though before deciding to use it!
        <ContentAdder />
      </AutoHeightAnimatedAccordion>

      <ControlledHeightAnimatedAccordion title="Animated Accordion - With Dynamic Resizing of Content">
        Controlling the height property of the content explicitly together with
        the ResizeObserver handles animation of additional dynamic content
        seamlessly!
        <ContentAdder />
      </ControlledHeightAnimatedAccordion>
    </div>
  );
}

export default App;
