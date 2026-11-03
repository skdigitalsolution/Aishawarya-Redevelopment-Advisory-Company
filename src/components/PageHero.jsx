
import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </motion.div>

        {image && (
          <motion.div
            className="page-hero-image"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={image}
              alt="Aishwarya Redevelopment Company"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
