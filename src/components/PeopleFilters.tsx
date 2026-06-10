import { useSearchParams } from 'react-router-dom';
import { SearchLink } from './SearchLink';

export const PeopleFilters = () => {
  const [searchParams] = useSearchParams();

  const selected = searchParams.getAll('centuries');
  const centuries = ['16', '17', '18', '19', '20'];

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs" data-cy="SexFilter">
        <a className="is-active" href="#/people">
          All
        </a>
        <a className="" href="#/people?sex=m">
          Male
        </a>
        <a className="" href="#/people?sex=f">
          Female
        </a>
      </p>

      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            data-cy="NameFilter"
            type="search"
            className="input"
            placeholder="Search"
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>

      <div className="panel-block">
        <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
          <div className="level-left">
            {centuries.map(c => {
              const isActive = selected.includes(c);

              const updated = isActive
                ? selected.filter(x => x !== c)
                : [...selected, c];

              return (
                <SearchLink
                  key={c}
                  params={{ centuries: updated }}
                  className={`button mr-1 ${isActive ? 'is-info' : ''}`}
                  data-cy="century"
                >
                  {c}
                </SearchLink>
              );
            })}
          </div>

          <div className="level-right ml-4">
            <a
              data-cy="centuryALL"
              className="button is-success is-outlined"
              href="#/people"
            >
              All
            </a>
          </div>
        </div>
      </div>

      <div className="panel-block">
        <a className="button is-link is-outlined is-fullwidth" href="#/people">
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
