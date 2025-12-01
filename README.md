# React exercises 01
## Task 1 Blog Card

https://date-fns.org/

```
npm install date-fns
```

```
import { formatDistance, subDays } from 'date-fns';

              <small className={styles.date}>
                {formatDistance(subDays(postedAt, 3), new Date(), {
                  addSuffix: true,
                })}
              </small>
```
