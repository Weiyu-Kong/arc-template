import { Activity, Database, LayoutDashboard, Workflow } from "lucide-react";
import { useEffect, useState } from "react";

import { listModules, type ModuleSummary } from "./api/client";


const cards = [
  { label: "Pages", value: "Ready", icon: LayoutDashboard },
  { label: "Data", value: "Seeded", icon: Database },
  { label: "Logic", value: "TDD", icon: Workflow },
  { label: "Status", value: "Preview", icon: Activity },
];


export default function App() {
  const [modules, setModules] = useState<ModuleSummary[]>([]);

  useEffect(() => {
    listModules().then(setModules).catch(() => {
      setModules([{ id: "home", name: "Home", status: "offline-preview" }]);
    });
  }, []);

  return (
    <main className="shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Generation Template</p>
          <h1>Generated Application</h1>
        </div>
      </header>
      <section className="metric-grid">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="metric" key={card.label}>
              <Icon aria-hidden="true" />
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          );
        })}
      </section>
      <section className="workspace">
        <aside>
          <h2>Modules</h2>
          <ul>
            {modules.map((module) => (
              <li key={module.id}>
                <span>{module.name}</span>
                <small>{module.status}</small>
              </li>
            ))}
          </ul>
        </aside>
        <section className="panel">
          <h2>Implementation Area</h2>
          <p>
            Generation agents should replace this starter view with pages, forms,
            data models, and workflows derived from the active requirement module.
          </p>
        </section>
      </section>
    </main>
  );
}

