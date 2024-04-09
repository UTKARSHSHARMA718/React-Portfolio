import React from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";

const withParticals = (Component) => {
  const newComponent = (props) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, display: "flex", flex: 1 , flexDirection:'column', padding:'24px 0px'}}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Component {...props} />
      <Particles
        id="tsparticles"
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={props.particlesOptions}
      />
    </motion.div>
  );

  return newComponent;
};

export default withParticals;
