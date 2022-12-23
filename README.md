# Blots Component Generator

PKG for crating base components for blots.js

 ***

### Default project structure folders

Your folder structure should look like this:

```
├── src
│  ├── components
│  ├── models
│  ├── services
```

***

### Create new Component in terminal:

```
blots new-component componentName
```

#### Result:

```
├── src
│  ├── components
│  │  ├── componentName
│  ├── models
│  ├── services
```

#### Or:

```
blots nc header/componentName
```

#### Result:

```
├── src
│  ├── components
│  │  ├── header
│  │  │   ├── componentName
│  ├── models
│  ├── services
```

***

### Create new Model in terminal:

```
blots new-model modelName
```

#### Result:

```
├── src
│  ├── components
│  ├── models
│  │  ├── modelName
│  ├── services
```

#### Or:

```
blots nm user/modelName
```

#### Result:

```
├── src
│  ├── components
│  ├── models
│  │  ├── user
│  │  │   ├── modelName
│  ├── services
```

***

### Create new Service in terminal:

```
blots new-service serviceName
```

#### Result:

```
├── src
│  ├── components
│  ├── models
│  ├── services
│  │  ├── serviceName
```

#### Or:

```
blots ns user/serviceName
```

#### Result:

```
├── src
│  ├── components
│  ├── models
│  ├── services
│  │  ├── user
│  │  │   ├── serviceName
```
